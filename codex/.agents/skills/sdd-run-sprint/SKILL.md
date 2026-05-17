---
name: sdd-run-sprint
description: 运行扩展后的 Sprint 执行循环：排程、实现、评审、同步状态。 Use this skill explicitly as the Codex replacement for the `/sdd-run-sprint` workflow command.
---

# sdd-run-sprint

This is a Codex Skill version of the original `/sdd-run-sprint` SDD command.

Before acting, read `AGENTS.md` and `.sdd/CURSOR.md`. Prefer using the `sdd_coordinator` custom agent as the orchestrator and delegate to focused subagents when useful.

运行一个 Sprint 执行周期。

流程：

1. 读取 `.sdd/CURSOR.md`。
2. 使用 SDD Scheduler 选择已就绪的叶子 TK 批次。
3. 对每个已选叶子 TK 使用 SDD Implementer。
4. 运行本地验证。
5. 使用 SDD Code Reviewer 创建或更新 CR。
6. 如果 CR 干净，则使用 SDD Delivery Agent 同步状态。
7. 如果存在发现项，则对其分类并规划修复。
8. 如果评审循环计数超过 5，停止并请求人工评审。

不要自动关闭 sprint。在 sprint close 之前询问用户。
