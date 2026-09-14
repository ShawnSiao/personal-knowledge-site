---
title: RAG 原创教程：从文档到可验证的回答
date: 2026-09-14
lastmod: 2026-09-14
draft: false
knowledge_id: ai-track-rag
knowledge_type: article
---

# RAG 原创教程：从文档到可验证的回答

这套教程围绕一个虚构团队的操作手册问答系统，从问题定义、资料入库，一直讲到检索、生成、评估和部署。每章包含原理解释、设计取舍、例子与练习；第十章提供可复制运行的完整实验。

正文依据公开论文、官方文档和企业工程文章独立撰写。它与本地课程按主题关联，**不是第三方课程的全文改写，也不代表原课程作者的观点**。资料核对日期为 2026 年 9 月 14 日。

## 开始阅读

[[learning/ai/rag-guide/01-problem|从第一章开始 →]] · [[learning/ai/rag-guide/10-lab|直接运行完整实验 →]]

- [[learning/ai/rag-guide/01-problem|01｜先定义问题：RAG 究竟解决什么]]
- [[learning/ai/rag-guide/02-ingestion|02｜文档入库：先保住来源、结构和版本]]
- [[learning/ai/rag-guide/03-chunking|03｜分块与索引：让片段既能命中又能读懂]]
- [[learning/ai/rag-guide/04-retrieval|04｜关键词、向量与混合检索：把候选找全]]
- [[learning/ai/rag-guide/05-reranking|05｜重排序与上下文组装：把有限位置留给证据]]
- [[learning/ai/rag-guide/06-generation|06｜生成与引用：让每个结论都有可检查的依据]]
- [[learning/ai/rag-guide/07-evaluation|07｜评估：分清没找到、没读懂和说错了]]
- [[learning/ai/rag-guide/08-production|08｜部署与运维：让更新、权限和失败都有确定行为]]
- [[learning/ai/rag-guide/09-cases|09｜案例与进阶：什么时候才值得增加复杂度]]
- [[learning/ai/rag-guide/10-lab|10｜完整实验：运行、测试与扩展一个检索问答流程]]

## 学完能够做什么

能够解释一次错误回答发生在文档、检索、上下文还是生成阶段；实现一个可追溯的检索基线；检查版本、权限与引用；设计独立问题集，并区分本地实验和生产证据。

阅读需要基础 Python 和 JSON 知识。离线实验只用标准库；神经嵌入、重排序与本地模型生成作为可选接入部分，不要求先购买服务。

## 实际案例与证据怎么使用

正文结合 Slack 的权限设计、Dropbox 的标注流程、Anthropic 的检索实验，以及 RAG、长上下文、GraphRAG 和评估研究。每项外部事实在对应段落链接原始来源，并与本站的分析建议分开。

厂商实验数字不作为本站项目成果。特别是检索失败率、回答正确率、忠实性和用户任务完成率，不能互相替代。

## 实验验证范围

配套离线代码已在 Python 3.11.1 下运行，10 项测试通过。5 个教学问题仅用于程序示范，不是独立质量评估。神经嵌入、重排序和生成示例已做语法检查，但没有在本次执行中下载模型或完成真实推理。

上线到本网站的是教程正文，不是对外提供服务的 RAG 应用。真实模型质量、性能、权限撤销和部署恢复，需要在具体应用环境另行验证。

## 本地课程关联

- [[learning/ai/courses/rag-quickstart|RAG快速开发实战]]：可配合本教程的文档、分块与检索章节阅读。
- [[learning/ai/courses/rag-systems|RAG系统实战课]]：可配合生成、评估与部署章节阅读。
- [[learning/ai/courses/llm-rag-handbook|LLM & RAG快速应用小册]]：可配合连续案例理解应用流程。
- [[learning/ai/courses/retrieval-fundamentals|检索技术核心20讲]]：用于补充检索基础。

[[learning/ai/catalog|完整课程目录]] · [[learning/index|返回学习首页]]
