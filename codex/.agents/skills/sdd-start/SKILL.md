---
name: sdd-start
description: 启动或恢复 Agentic Governance SDD 工作流。 Use this skill explicitly as the Codex replacement for the `/sdd-start` workflow command.
---

# sdd-start

This is a Codex Skill version of the original `/sdd-start` SDD command.

Before acting, read `AGENTS.md` and `.sdd/CURSOR.md`. Prefer using the `sdd_coordinator` custom agent as the orchestrator and delegate to focused subagents when useful.

读取 `.sdd/CURSOR.md`、`.sdd/TASKS.md`、`.sdd/REVIEWS.md` 和 `.sdd/CHECKLIST.md`。

判断项目应从以下哪个阶段恢复：

- specify
- draft
- review
- rfc
- sprint-schedule
- execution
- review-loop
- delivery-sync
- sprint-close

然后告知用户：

1. 当前状态
2. 推荐的下一步动作
3. 缺失文件或不一致项
4. 接下来将使用哪个子 agent
