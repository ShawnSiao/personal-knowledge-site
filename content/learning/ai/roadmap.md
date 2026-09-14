---
title: AI 学习路线
date: 2026-09-14
lastmod: 2026-09-14
draft: false
knowledge_id: ai-learning-roadmap
knowledge_type: article
---

# AI 学习路线

以完成一个可检查的小应用为主线，按「模型调用 → 知识检索 → 受控执行 → 工程验证」推进。以下是学习建议，时间按个人安排调整，不是已完成进度。

## 起点：先会调用，再选方向

学习[[learning/ai/courses/ai-first-course|程序员的 AI 开发第一课]]的模型、提示与调用部分。完成一个文本整理器，检查缺失信息、结构化输出和错误处理。需要更多例子时，补充[[learning/ai/courses/ms-generative-ai|微软生成式 AI 入门课程]]。

完成条件：能够解释输入、上下文和输出的关系；程序能处理超时与无效结果。

## 第二步：让回答有依据

以[[learning/ai/courses/rag-quickstart|RAG 快速开发实战]]为主，沿着解析、分块、检索、生成建立小型问答器。再用[[learning/ai/courses/rag-systems|RAG 系统实战课]]补业务集成与诊断。

完成条件：问题集同时包含可回答、不可回答和有版本冲突的问题；每个回答都有可定位的出处。

## 第三步：让工具执行可控

选择[[learning/ai/courses/agent-harness|从 0 开始构建 Agent Harness]]，分段实现循环、工具、会话、审批和记录。使用[[learning/ai/courses/hf-agents|Agents Course]]比较框架，并用[[learning/ai/courses/hf-mcp|MCP Course]]补协议集成。

完成条件：工具调用受参数校验和权限控制；支持取消、预算终止和会话隔离；重复请求不会重复产生写入。

## 第四步：补齐应用工程

结合[[learning/ai/courses/llm-project-delivery|AI 大模型项目落地实战]]检查业务边界。只有需要集群或网关时，再学习[[learning/ai/courses/cloud-native-agents|AI 重塑云原生应用开发实战]]和[[learning/ai/courses/deepseek-practice|DeepSeek 应用开发实战]]的相关部分。

完成条件：有固定样例、故障记录、运行配置和可解释的测试结果。部署与真实使用效果另行验证。

## 分支如何选择

- 需要训练模型：进入[[learning/ai/ml|机器学习与模型训练]]，先做数据划分和简单基线。
- 需要图像能力：进入[[learning/ai/multimodal|多模态与 AI 绘画]]，先验证素材与输出质量。
- 需要推荐或批处理：进入[[learning/ai/data|数据分析、推荐与基础设施]]，按规模和性能问题补课。
- 希望理解研究背景：进入[[learning/ai/perspectives|AI 研究阅读与行业观察]]，核对日期与原始证据。

## 每次学习留下什么

1. 一个具体问题，以及选择本次内容的原因。
2. 一段自己的解释，说明适用条件。
3. 一份能复查的输入、配置与输出。
4. 一次失败分析和下一步修改。

课程进度与实践结果分别记录；看完视频不自动等于具备实现能力。

[[learning/ai/catalog|浏览全部 45 个学习条目]] · [[learning/index|返回学习首页]]
