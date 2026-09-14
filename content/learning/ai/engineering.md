---
title: AI 应用工程与部署
date: 2026-09-14
lastmod: 2026-09-14
draft: false
knowledge_id: ai-track-engineering
knowledge_type: article
---

# AI 应用工程与部署

从能调用模型到能稳定运行，需要补上业务规则、资源约束、故障处理和运维记录。本专题按个人整理的工程检查顺序学习。

## 学习顺序

1. 先画请求经过应用服务、模型接口、检索服务和工具服务的路径，标明身份、数据和错误在何处传递。
2. 将业务规则留在确定性的程序中。模型生成建议，程序检查价格、库存、权限和状态等约束。
3. 对模型服务设置并发限制、超时和成本预算；使用固定输入记录延迟与资源占用，不照搬课程中的硬件结论。
4. 部署前验证配置、日志脱敏、健康检查和回滚方式。先用模拟故障检查降级，再讨论扩容。

## 对应课程

- [[learning/ai/courses/deepseek-practice|DeepSeek 应用开发实战]] — 进阶。本地部署、MCP、微调体验、应用工作流与代码辅助。
- [[learning/ai/courses/llm-project-delivery|AI大模型项目落地实战]] — 主线。模型原理、提示与业务控制、Agent 架构、数据与评估。
- [[learning/ai/courses/llm-systems|AI大模型系统实战]] — 进阶。原型系统、大模型底座与系统级应用设计。
- [[learning/ai/courses/llm-advanced-practice|AI大模型实战高手课]] — 补充。提示工程、知识检索、Agent 与本地模型实践。
- [[learning/ai/courses/llama3-practice|LLaMA 3前沿模型实战课]] — 补充。对话、长文本、指令跟随与开源模型应用。
- [[learning/ai/courses/enterprise-ai|AI 大模型企业应用实战]] — 进阶。企业应用与研发效率实践。
- [[learning/ai/courses/ai-cloud-architecture|百万 AI 云架构]] — 按需补充。Python 基础与 AI 云架构资料。

## 综合练习

为已有问答器增加请求 ID、错误分类、延迟记录和取消功能。在隔离环境模拟模型不可用、检索超时和重复提交。

## 验收标准

每次请求可追踪；失败有明确状态；恢复后不重复执行写操作；记录测试所用硬件、模型版本、并发与输入长度。

## 常见误区

本地跑通与生产可用是不同的验证结果。微调、量化、集群部署应由质量或资源问题驱动，不能作为默认前置步骤。

上述安排是本站的学习设计，实际练习结果尚待记录。公开延伸阅读：[Generative AI for Beginners](https://github.com/microsoft/generative-ai-for-beginners)。

[[learning/ai/catalog|完整课程目录]] · [[learning/ai/roadmap|学习路线]] · [[learning/index|返回学习首页]]
