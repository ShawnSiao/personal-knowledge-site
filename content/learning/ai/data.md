---
title: 数据分析、推荐与基础设施
date: 2026-09-14
lastmod: 2026-09-14
draft: false
knowledge_id: ai-track-data
knowledge_type: article
---

# 数据分析、推荐与基础设施

这些课程为 AI 应用补充数据处理、检索、推荐和实验基础。根据项目缺口选择，不必在大模型入门前全部学完。

## 学习顺序

1. 明确数据字段、缺失值、重复值和时间范围，先写出可检查的数据质量规则。
2. 从单机处理与简单检索开始，只有数据规模或延迟确实超出要求时，再研究分布式处理与缓存。
3. 推荐任务先建立召回与排序基线，区分离线指标和真实使用效果，不把点击率作为唯一目标。
4. 设计实验前确定假设、指标与样本单位，记录数据来源和分析方法，避免看到结果后再修改成功标准。

## 对应课程

- [[learning/ai/courses/big-data-intro|从0开始学大数据]] — 按需补充。分布式存储、计算模型与数据系统演化。
- [[learning/ai/courses/large-scale-data|大规模数据处理实战]] — 按需补充。分布式处理、数据规模与系统服务目标。
- [[learning/ai/courses/data-papers|大数据经典论文解读]] — 按需补充。存储与计算系统论文、架构权衡与演化。
- [[learning/ai/courses/spark-intro|零基础入门Spark]] — 按需补充。RDD、计算模型、算子与分布式部署。
- [[learning/ai/courses/spark-performance|Spark性能调优实战]] — 按需补充。RDD、DAG、执行过程与性能分析。
- [[learning/ai/courses/deep-recommendation|深度学习推荐系统实战]] — 推荐分支。推荐架构、特征工程与深度学习推荐。
- [[learning/ai/courses/recommendation-build|手把手带你搭建推荐系统]] — 推荐分支。推荐系统架构、数据获取与处理。
- [[learning/ai/courses/recommendation-patterns|推荐系统三十六式]] — 推荐分支。推荐问题定义、用户画像与策略选择。
- [[learning/ai/courses/data-analysis-practice|数据分析实战45讲]] — 数据基础。数据分析流程、Python 与科学计算。
- [[learning/ai/courses/data-thinking|数据分析思维课]] — 数据基础。统计量、随机性、期望与实验思维。
- [[learning/ai/courses/ab-testing|A-B测试从0到1]] — 实验分支。统计基础、假设、实验目标与指标设计。
- [[learning/ai/courses/cryptography|实用密码学]] — 安全补充。散列、完整性与安全强度基础。

## 综合练习

整理一份自有资料目录，完成去重、分类与关键词检索。若做推荐，先比较按时间、按主题与简单相似度三种方案。

## 验收标准

处理前后的记录数可核对；异常数据有记录；检索或推荐可用固定样例比较；性能测试条件可以复现。

## 常见误区

Spark 和大规模架构不是每个 AI 项目的必需依赖。先用简单方案解决问题，再根据测量结果扩展。

上述安排是本站的学习设计，实际练习结果尚待记录。公开延伸阅读：[PyTorch Tutorials](https://docs.pytorch.org/tutorials/)。

[[learning/ai/catalog|完整课程目录]] · [[learning/ai/roadmap|学习路线]] · [[learning/index|返回学习首页]]
