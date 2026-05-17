---
name: sdd-start
description: 启动或恢复 Agentic Governance SDD 工作流。
disable-model-invocation: true
allowed-tools: Agent(sdd-coordinator), Read, Glob, Grep, Bash, Edit, Write
---

# sdd-start

This skill is the Claude Code version of the original `/sdd-start` SDD command.

Delegate orchestration to the `sdd-coordinator` subagent when possible. Before acting, read `CLAUDE.md` and `.sdd/CURSOR.md`.

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
