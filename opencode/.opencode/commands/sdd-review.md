---
description: 针对当前 SDD draft 运行架构和安全评审。
agent: sdd-coordinator
---

通过 Task 工具运行以下 subagents：

1. `sdd-architecture-reviewer`
2. `sdd-security-reviewer`

评审 `.sdd/DRAFT.md` 以及相关仓库上下文。

更新 `.sdd/REVIEWS.md`。

如果发现项具有实质性影响，则在 `.sdd/DRAFT.md` 中补充评审说明，或询问用户是否需要修订 draft。

将 `.sdd/CURSOR.md` 的 phase 设置为 `review`。

不要实现代码。


OpenCode 说明：该文件位于 `.opencode/commands/`，文件名即 slash command 名称。
