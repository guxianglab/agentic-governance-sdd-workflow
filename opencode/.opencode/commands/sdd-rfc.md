---
description: 基于当前 SDD draft 生成 RFC、PLAN、TASKS、REVIEWS 和 CURSOR。
agent: sdd-coordinator
---

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

通过 Task 工具调用 `sdd-scheduler` 提出初始叶子 TK 和就绪条件。

Sprint 前目标：

- 定义当前 Sprint 边界
- 生成叶子 TK
- 识别依赖关系
- 识别写入范围
- 标记可并行的 TK

不要实现代码。


OpenCode 说明：该文件位于 `.opencode/commands/`，文件名即 slash command 名称。
