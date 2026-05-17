---
name: sdd-rfc
description: 基于当前 SDD draft 生成 RFC、PLAN、TASKS、REVIEWS 和 CURSOR。 Use this skill explicitly as the Codex replacement for the `/sdd-rfc` workflow command.
---

# sdd-rfc

This is a Codex Skill version of the original `/sdd-rfc` SDD command.

Before acting, read `AGENTS.md` and `.sdd/CURSOR.md`. Prefer using the `sdd_coordinator` custom agent as the orchestrator and delegate to focused subagents when useful.

读取：

- `.sdd/REQUIREMENT.md`
- `.sdd/DRAFT.md`
- `.sdd/REVIEWS.md`

创建或更新：

- `.sdd/RFC.md`
- `.sdd/PLAN.md`
- `.sdd/TASKS.md`
- `.sdd/CURSOR.md`
- `.sdd/CHECKLIST.md`

使用 SDD Scheduler 提出初始叶子 TK 和就绪条件。

Sprint 前目标：

- 定义当前 Sprint 边界
- 生成叶子 TK
- 识别依赖关系
- 识别写入范围
- 标记可并行的 TK

不要实现代码。
