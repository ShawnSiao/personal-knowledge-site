---
title: 04｜关键词、向量与混合检索：把候选找全
date: 2026-09-14
lastmod: 2026-09-14
draft: false
knowledge_id: rag-guide-04-retrieval
knowledge_type: article
---

[[learning/ai/rag|RAG 原创教程]] · 第 4 / 10 章

# 关键词、向量与混合检索：把候选找全

纸舟的操作手册把恢复旧版本称为「发布回滚」，提问者却问「怎样退回上一个版本」。仅按完整词语匹配可能找不到；另一个问题包含错误码 E-1042，语义相近的 E-1043 文档又不能代替它。

这说明检索至少面对两类需求：保留精确标识符，理解表达差异。混合检索的动机不是追逐新技术，而是让不同方法补充各自遗漏的证据。

## 1. 先建立关键词基线

关键词检索将文本变成词项，并衡量问题中的词在文档中有多重要。BM25 中常见的三个因素是词频、词的稀有程度和文档长度。一个词重复出现并不会无限增加价值；很长的文档也不能只因包含更多词就总排在前面。

中文分词会直接影响结果。「备份保留」若被切成不同组合，匹配行为就会改变。错误码、版本号、产品型号通常要单独保存或使用合适的分析器，不能随意删除连字符。系列实验使用中文双字片段与英文词项，方便展示算法，但不代表生产环境最佳分词方法。

不要跳过关键词基线。没有基线，就无法知道向量检索到底改善了哪类问题，或者只是改变了返回顺序。

## 2. 向量检索计算的是什么

嵌入模型把问题和片段映射到向量空间。检索系统比较向量距离，返回接近的片段。这里的接近是一种模型学到的相关性，不是事实验证，也不是「正确概率」。

对于已经归一化的向量，点积可以用于比较余弦相似度。下面仅演示计算，不是假装通过三个数字理解自然语言：

```python
from math import sqrt

def cosine(a, b):
    if len(a) != len(b) or not a:
        raise ValueError("向量必须非空且维度一致")
    na = sqrt(sum(x * x for x in a))
    nb = sqrt(sum(x * x for x in b))
    if not na or not nb:
        raise ValueError("零向量没有可用方向")
    return sum(x * y for x, y in zip(a, b)) / (na * nb)

assert abs(cosine([1, 0], [1, 0]) - 1) < 1e-9
assert abs(cosine([1, 0], [0, 1])) < 1e-9
```

真正接入模型时，必须核对语言覆盖、输入长度、问题与文档是否使用不同编码约定、模型版本和向量维度。更换模型需要重建文档向量，不能只替换查询端。

数据少时可以遍历所有向量计算精确结果。数据量大时，近似最近邻索引以部分准确性换速度；需要用精确检索结果作为对照，检查近似索引是否漏掉本应命中的候选。不要把近似索引造成的漏检全部归因于嵌入模型。

## 3. 分数不能随手相加

BM25 分数与向量相似度通常不在同一尺度。直接计算「BM25 加余弦相似度」，可能使其中一路完全压过另一路。

一种按排名融合的方法是 RRF。设片段在某一路的名次为 r，从 1 开始，其贡献为 1 / (c + r)；多路贡献相加，没有出现在某一路则不贡献。c 是控制名次差异影响的常量，与最终返回几个候选不是同一参数。

```python
from collections import defaultdict

def fuse(rankings, c=60):
    scores = defaultdict(float)
    for ranking in rankings:
        for rank, doc_id in enumerate(dict.fromkeys(ranking), 1):
            scores[doc_id] += 1 / (c + rank)
    return sorted(scores, key=lambda doc_id: (-scores[doc_id], doc_id))
```

这个函数接收若干由文档 ID 组成的有序列表，使用去重后的名次。Elastic 文档提供了将不同检索结果通过 RRF 合并的实现说明；本文代码是独立教学实现，不是 Elasticsearch 客户端代码。[RRF 官方文档](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/reciprocal-rank-fusion)

RRF 解决的是分数尺度问题，不保证任何资料集上都优于经过验证的加权融合。候选深度改变也会影响结果，需要与配置一同记录。

## 4. 检索之前先限定范围

文档权限、有效版本、产品类别和时间范围有时比向量相似度更重要。E-1042 属于产品 A 时，产品 B 中含义不同的同名错误码不应混入答案。

权限来自服务端身份，不能相信问题文字中的「我是管理员」。业务筛选条件可以从问题中提取，但要经过校验；模型猜出的日期或产品名不能无提示地变成硬过滤条件，否则可能把正确文档排除。

## 5. 判断是否需要混合检索

构造三组问题：精确标识符、同义表达、需要多个条件的问题。分别运行关键词、向量和融合，比较正确证据进入候选的比例，并人工查看失败样例。

如果关键词已经稳定命中，加入向量只增加延迟而没有改善，就保留简单方案。如果同义表达明显漏检，可以尝试词典、查询改写或语义检索，而不是一次引入所有方法。

## 可选接入：真正的嵌入检索

下面代码单独保存为 dense_demo.py，与第十章的 rag_lab.py 放在同一目录。它会下载模型，需要先在独立环境安装 sentence-transformers；本次发布只核对了接口与语法，没有下载权重或运行此神经模型。

```python
from sentence_transformers import SentenceTransformer
from rag_lab import DOCUMENTS, visible_chunks, bm25, rrf

question = "怎样退回上一个版本"
chunks = visible_chunks(DOCUMENTS, {"staff"})
model = SentenceTransformer("intfloat/multilingual-e5-small")
vectors = model.encode(
    ["passage: " + c.title + " " + c.text for c in chunks],
    normalize_embeddings=True,
)
query = model.encode(["query: " + question], normalize_embeddings=True)[0]
dense = sorted(
    [(c.id, float(score)) for c, score in zip(chunks, vectors @ query)],
    key=lambda item: (-item[1], item[0]),
)[:5]
lexical = bm25(question, chunks)[:5]
print("dense:", dense)
print("hybrid:", rrf([lexical, dense])[:3])
```

E5 模型卡要求此类检索输入使用 query 与 passage 前缀，非英文输入也遵守约定。[模型卡](https://huggingface.co/intfloat/multilingual-e5-small) 不同模型不能照搬同一前缀。该例仅遍历小语料中的向量；正式使用时应固定依赖版本和模型 revision，验证截断与硬件资源，并用保留问题集评估。

## 本章练习与判断依据

为「回滚」写出 5 种自然表达，再加入 5 个相似但不同的错误码。保存每路检索的候选 ID、原始分数、名次和融合结果。

验收时说明每一次新增命中来自哪一路。完整实验页提供 BM25 与词典扩展融合，演示多路结果的合并；它没有神经向量检索，不能把该实验结果当作语义模型的性能。

---

[[learning/ai/rag-guide/03-chunking|← 上一章]] · [[learning/ai/rag|教程目录]] · [[learning/ai/rag-guide/05-reranking|下一章 →]]
