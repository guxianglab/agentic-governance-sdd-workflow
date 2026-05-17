# Copilot 工作区说明

本仓库使用 Agentic Governance SDD 工作流。

在规划或编辑前，始终检查 `.sdd/CURSOR.md`。如果当前阶段未知，询问用户是否运行 `/sdd-start` 或 `/sdd-sync-state`。

## 默认行为

- 编辑前优先规划。
- 保持 `.sdd/` 状态一致性。
- 任务 ID 使用 `TK-0001` 这种形式。
- 评审 ID 使用 `CR-0001` 这种形式。
- sprint ID 使用 `S001` 这种形式。
- 将 `.github/agents/*.agent.md` 视为 Copilot 自定义 agent 定义。
- 将 `.github/prompts/*.prompt.md` 视为可复用的 slash 命令。

## 治理边界

架构和安全评审者不应修改实现文件。Implementers 不应重写治理文件，除非是他们被分配的 TK，或是 Coordinator 请求的状态更新。

## 输出期望

当你做出变更时，请总结：

1. 变更的文件
2. 相关的 TK / CR
3. 执行过的验证
4. 剩余风险
5. 下一步动作
