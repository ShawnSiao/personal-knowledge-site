---
title: 大模型入门与提示词
date: 2026-09-14
lastmod: 2026-09-14
draft: false
knowledge_id: ai-track-foundations
knowledge_type: article
---

# 大模型入门与提示词

先理解输入、上下文、输出与验证，再学习框架。目标是完成一个输入边界明确、输出能够检查的小应用。

## 学习顺序

1. 把任务写成输入材料、处理目标、约束条件、输出格式四部分。给出一个正常样例和一个信息不足的反例。
2. 用同一组输入比较直接提问、补充背景和提供示例三种提示，记录失败类型；不要只保留最漂亮的一次回答。
3. 将模型调用封装成独立接口，显式处理超时、空结果、格式不符和用户取消。密钥通过运行环境提供。
4. 分别理解知识补充、工具执行和模型训练解决的问题，再进入 RAG 或 Agent 专题。

## 对应课程

- [[learning/ai/courses/ai-first-course|程序员的AI开发第一课]] — 主线。模型基础、提示词、模型调用、RAG 与 Agent 的整体关系。
- [[learning/ai/courses/gpt-introduction|零基础GPT应用入门课]] — 补充。任务拆解、交互提问与生成结果检查。
- [[learning/ai/courses/llm-concepts|AI大模型之美]] — 补充。语言模型应用、提示与模型能力理解。
- [[learning/ai/courses/langchain-practice|LangChain实战课]] — 补充。模型输入输出、提示模板、知识库与框架抽象。
- [[learning/ai/courses/learn-ai-videos|跟我学 AI]] — 补充。人工智能入门与 Agent、Skills 相关视频资料。
- [[learning/ai/courses/prompt-engineering|提示词工程]] — 补充。提示词编写、讲义与视频资料。
- [[learning/ai/courses/ms-generative-ai|Generative AI for Beginners]] — 公开课程。生成式 AI 基础与应用构建。

## 综合练习

做一个会议记录整理器。准备 10 段自行编写的材料，输出决定事项、负责人和待确认问题。缺失负责人时保留待确认，不能自行补全。

## 验收标准

每条决定都能回到输入原文；结构化输出可解析；缺失信息有明确表示；错误输入不会被包装成成功结果。

## 常见误区

提示词长度不代表质量。先固定输入样例和判断标准，再增加提示内容。课程中的具体模型名和 SDK 调用方式应按使用时的官方文档核对。

上述安排是本站的学习设计，实际练习结果尚待记录。公开延伸阅读：[Generative AI for Beginners](https://github.com/microsoft/generative-ai-for-beginners)。

[[learning/ai/catalog|完整课程目录]] · [[learning/ai/roadmap|学习路线]] · [[learning/index|返回学习首页]]
