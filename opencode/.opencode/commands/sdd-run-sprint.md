---
description: 运行扩展后的 Sprint 执行循环：排程、实现、评审、同步状态。
agent: sdd-coordinator
---

运行一个 Sprint 执行周期。

流程：

1. 读取 `.sdd/CURSOR.md`。
2. 通过 Task 工具调用 `sdd-scheduler` 选择已就绪的叶子 TK 批次。
3. 对每个已选叶子 TK 通过 Task 工具调用 `sdd-implementer`。
4. 运行本地验证。
5. 通过 Task 工具调用 `sdd-code-reviewer` 创建或更新 CR。
6. 如果 CR 干净，则通过 Task 工具调用 `sdd-delivery` 同步状态。
7. 如果存在发现项，则对其分类并规划修复。
8. 如果评审循环计数超过 5，停止并请求人工评审。

不要自动关闭 sprint。在 sprint close 之前询问用户。


OpenCode 说明：该文件位于 `.opencode/commands/`，文件名即 slash command 名称。
