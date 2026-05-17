---
name: sdd-review
description: 针对当前 SDD draft 运行架构和安全评审。
agent: SDD Coordinator
tools: ['agent', 'search', 'edit']
---

运行以下子 agents：

1. SDD Architecture Reviewer
2. SDD Security Reviewer

评审 `.sdd/DRAFT.md` 以及相关仓库上下文。

更新 `.sdd/REVIEWS.md`。

如果发现项具有实质性影响，则在 `.sdd/DRAFT.md` 中补充评审说明，或询问用户是否需要修订 draft。

将 `.sdd/CURSOR.md` 的 phase 设置为 `review`。

不要实现代码。
