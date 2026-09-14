---
title: Agent、MCP 与运行控制
date: 2026-09-14
lastmod: 2026-09-14
draft: false
knowledge_id: ai-track-agents
knowledge_type: article
---

# Agent、MCP 与运行控制

Agent 学习重点是把模型建议转成受控执行。工具调用、会话状态、权限、停止条件和执行记录需要一起设计。

## 学习顺序

1. 从单工具开始：模型选择工具并提出参数，程序校验参数后执行，再把结果放回上下文。先画清状态转换。
2. 给执行循环设置步数上限、超时和取消入口，区分正常结束、等待人工输入、工具失败与预算耗尽。
3. 将会话状态与长期资料分开；压缩上下文时保留目标、已完成操作、关键证据和待处理问题。
4. 接入 MCP 前明确工具的数据范围与写入权限。先做只读工具，再为写操作加入预览、审批、幂等与审计。
5. 用固定任务集复查成功率、耗时、调用次数和失败原因；用结构化事件记录工具与决策依据，避免记录私密推理文本。

## 对应课程

- [[learning/ai/courses/agent-harness|从0开始构建Agent Harness]] — 主线。执行循环、工具注册、会话与压缩、审批、追踪与评估。
- [[learning/ai/courses/cloud-native-agents|AI重塑云原生应用开发实战]] — 进阶。工具调用、Go Agent、集群运维工具与 AI 网关。
- [[learning/ai/courses/autonomous-agents|LLM自主智能体应用实战课]] — 补充。自主 Agent、MetaGPT 与框架实践。
- [[learning/ai/courses/llm-app-development|大模型应用开发实战]] — 补充。工具调用、会话状态、代码执行与文件检索应用。
- [[learning/ai/courses/agent-interview-notes|AI Agent 面试专题资料]] — 专题资料。流式回答中断与上下文恢复。
- [[learning/ai/courses/hf-agents|Hugging Face Agents Course]] — 公开课程。Agent 基础、框架、应用与评估。
- [[learning/ai/courses/hf-mcp|Hugging Face MCP Course]] — 公开课程。MCP 基础、客户端、服务端与应用集成。
- [[learning/ai/courses/context-course|Context Course]] — 公开课程。Skills、MCP、插件与上下文组织。

## 综合练习

实现一个工单协作助手：查询模拟工单、检索公开 SOP、生成处理建议。创建或修改工单必须经过人工确认。加入工具超时、重复请求和用户中断三类故障。

## 验收标准

重复确认不会重复写入；取消后不再启动新操作；不同会话相互隔离；每次运行都有终止原因和可回放的工具事件。

## 常见误区

协议连接成功不代表工具可信。工具返回和检索文档都可能包含不可信指令，不能提升为系统规则。框架和自行实现的循环都需要独立验收。

上述安排是本站的学习设计，实际练习结果尚待记录。公开延伸阅读：[Hugging Face MCP Course](https://huggingface.co/learn/mcp-course/en/unit0/introduction)。

[[learning/ai/catalog|完整课程目录]] · [[learning/ai/roadmap|学习路线]] · [[learning/index|返回学习首页]]
