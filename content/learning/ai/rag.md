---
title: RAG 与知识检索
date: 2026-09-14
lastmod: 2026-09-14
draft: false
knowledge_id: ai-track-rag
knowledge_type: article
---

# RAG 与知识检索

把资料转成可追溯的回答，需要分别检查文档处理、检索和生成。没有检索到证据时，应当保留不确定性。以下是本站设计的练习路线。

## 学习顺序

1. 选取 20 份自有或允许公开的文档，保存文档 ID、版本、标题和段落位置。先处理乱码、重复段落和表格丢失。
2. 按标题与语义边界分块，保留出处。用同一组问题比较分块方案，观察答案证据是否被截断。
3. 先做关键词检索基线，再比较向量检索、混合检索与重排序。每次只改一个变量，并保留前后结果。
4. 把检索片段连同出处交给生成环节，要求回答引用片段。分别统计证据是否命中、回答是否忠于证据、是否正确拒答。

## 对应课程

- [[learning/ai/courses/rag-quickstart|RAG快速开发实战]] — 主线。文档解析、分块、向量库、混合检索、重排序与评估。
- [[learning/ai/courses/rag-systems|RAG系统实战课]] — 主线。业务系统问答、元数据检索、知识入库与质量改进。
- [[learning/ai/courses/llm-rag-handbook|LLM & RAG快速应用小册]] — 补充。企业资料整理、知识问答、内容推荐与生成应用。
- [[learning/ai/courses/retrieval-fundamentals|检索技术核心20讲]] — 补充。检索的数据结构、哈希、状态与索引基础。

## 综合练习

做一个公开资料问答器，准备 30 个问题：20 个可回答、5 个资料没有答案、5 个存在版本冲突。保留每次检索命中的文档和最终引用。

## 验收标准

能够解释每个失败发生在解析、分块、召回、排序还是生成阶段；无答案问题不会强行给出事实；文档更新后引用仍能定位。

## 常见误区

回答流畅不能证明检索有效。不要一开始同时加入图检索、多轮改写和多 Agent；先建立可比较的基线。

上述安排是本站的学习设计，实际练习结果尚待记录。公开延伸阅读：[Hugging Face Agents Course](https://huggingface.co/learn/agents-course/en/unit0/introduction)。

[[learning/ai/catalog|完整课程目录]] · [[learning/ai/roadmap|学习路线]] · [[learning/index|返回学习首页]]
