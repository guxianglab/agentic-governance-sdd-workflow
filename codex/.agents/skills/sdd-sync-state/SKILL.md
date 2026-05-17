---
name: sdd-sync-state
description: 在实现或评审之后对 SDD 状态文件进行对账。 Use this skill explicitly as the Codex replacement for the `/sdd-sync-state` workflow command.
---

# sdd-sync-state

This is a Codex Skill version of the original `/sdd-sync-state` SDD command.

Before acting, read `AGENTS.md` and `.sdd/CURSOR.md`. Prefer using the `sdd_coordinator` custom agent as the orchestrator and delegate to focused subagents when useful.

使用 SDD Delivery Agent 对以下内容进行对账：

- `.sdd/CURSOR.md`
- `.sdd/TASKS.md`
- `.sdd/REVIEWS.md`
- `.sdd/CHECKLIST.md`
- `.sdd/tasks/*.md`
- `.sdd/reviews/*.md`

报告不一致项，并在可行时修复；如果需要决策，则询问用户。
