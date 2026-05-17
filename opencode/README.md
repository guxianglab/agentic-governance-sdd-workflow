# Agentic Governance SDD Workflow for OpenCode

这个包把“Agentic Governance SDD Workflow”转换成适用于 **OpenCode** 的项目级配置方案。

## 包含内容

```text
opencode.json                 # OpenCode 项目级配置
AGENTS.md                     # OpenCode 项目级规则
.opencode/
  agents/                     # OpenCode agents；文件名即 agent 名称
  commands/                   # OpenCode slash commands；文件名即命令名
  skills/sdd-governance/      # 可按需加载的 SDD governance skill
.sdd/
  CURSOR.md
  REQUIREMENT.md
  DRAFT.md
  RFC.md
  PLAN.md
  TASKS.md
  REVIEWS.md
  CHECKLIST.md
  templates/
  tasks/
  reviews/
  rules/
  scripts/
docs/sdd/workflow-overview.md
```

## 快速开始

1. 将本包内容复制到你的仓库根目录。
2. 在仓库根目录运行 `opencode`。
3. 使用 `/sdd-start` 读取当前 `.sdd/` 状态并恢复流程。
4. 根据阶段继续运行：
   - `/sdd-specify`
   - `/sdd-draft`
   - `/sdd-review`
   - `/sdd-rfc`
   - `/sdd-run-sprint`
   - `/sdd-sync-state`
   - `/sdd-close-sprint`

## OpenCode 规则说明

- OpenCode 的项目规则来自根目录 `AGENTS.md`。
- 自定义 agents 放在 `.opencode/agents/`。
- 自定义命令放在 `.opencode/commands/`。
- Agent 文件和 command 文件都是普通 Markdown + YAML frontmatter。
- 文件名就是 OpenCode 里的 agent / command 名称，例如：
  - `.opencode/agents/sdd-coordinator.md` -> `sdd-coordinator`
  - `.opencode/commands/sdd-run-sprint.md` -> `/sdd-run-sprint`

## Agent 设计

- `sdd-coordinator`：primary agent，负责主流程和 subagent 调度。
- `sdd-requirement`：需求澄清。
- `sdd-draft`：设计草案。
- `sdd-architecture-reviewer`：只读架构评审。
- `sdd-security-reviewer`：只读安全评审。
- `sdd-scheduler`：任务拆分、依赖、ready batch。
- `sdd-implementer`：受控实现叶子 TK。
- `sdd-code-reviewer`：CR 创建、发现项、复检。
- `sdd-delivery`：交付验证和状态同步。

## 重要区别：OpenCode 版本不是 Copilot 版本

本包已移除 VS Code Copilot 的 `.github/agents/*.agent.md` 和 `.github/prompts/*.prompt.md` 结构，替换为 OpenCode 的：

```text
.opencode/agents/*.md
.opencode/commands/*.md
opencode.json
AGENTS.md
```

`.sdd/` 目录继续作为跨工具的状态层，用来保证流程可以恢复、评审可追踪、交付状态可对账。
