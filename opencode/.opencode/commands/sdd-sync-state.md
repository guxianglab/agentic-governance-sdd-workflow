---
description: 在实现或评审之后对 SDD 状态文件进行对账。
agent: sdd-coordinator
---

通过 Task 工具调用 `sdd-delivery` 对以下内容进行对账：

- `.sdd/CURSOR.md`
- `.sdd/TASKS.md`
- `.sdd/REVIEWS.md`
- `.sdd/CHECKLIST.md`
- `.sdd/tasks/*.md`
- `.sdd/reviews/*.md`

报告不一致项，并在可行时修复；如果需要决策，则询问用户。


OpenCode 说明：该文件位于 `.opencode/commands/`，文件名即 slash command 名称。
