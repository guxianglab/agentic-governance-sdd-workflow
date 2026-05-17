# Agentic Governance SDD Workflow

> A production-grade, multi-agent software development workflow with built-in governance — packaged for every major AI coding assistant.

**English** | [中文](#中文)

---

## What Is This?

Most AI coding workflows are one-shot: you prompt, the agent writes code, you ship. This project takes a different approach. It brings **structured, governed, multi-agent software development** to your AI coding assistant — with explicit review gates, durable state, audit trails, and a full sprint lifecycle.

Think of it as bringing the discipline of a senior engineering team to your AI agent — where requirements are clarified before drafting, designs are reviewed before implementation, code is reviewed before merging, and rules accumulate over time.

---

## Why This Exists

| Problem | This Solution |
|---|---|
| Agents hallucinate requirements | `/sdd-specify` forces explicit confirmation before any design work |
| No design before coding | `/sdd-draft` + architecture & security review gates |
| No traceability | Durable `.sdd/` state: REQUIREMENT → DRAFT → RFC → PLAN → TASKS → REVIEWS |
| Reviews are skipped | Mandatory CR loop with accepted/rejected findings |
| Agents forget context | `CURSOR.md` tracks exact position in the workflow |
| Rules aren't learned | High-impact findings become `rule-candidates` → `accepted-rules` |
| Vendor lock-in | 4 identical workflow packages for Claude Code, Codex, Copilot, OpenCode |

---

## Workflow Overview

```
User Requirement
  └─> /sdd-specify      — Clarify & confirm requirement
        └─> /sdd-draft        — Architecture draft
              └─> /sdd-review       — Architecture + security review
                    └─> /sdd-rfc          — RFC → PLAN → TASKS → sprint
                          └─> /sdd-run-sprint   — Execute leaf tasks with CR loop
                                └─> /sdd-sync-state  — Sync state files
                                      └─> /sdd-close-sprint — Close or continue
```

Each transition requires **explicit user approval**. No phase is skipped automatically.

---

## Agent Roles

| Agent | Responsibility | Write Scope |
|---|---|---|
| `sdd-coordinator` | Orchestrates full workflow, gates, user confirmations | `.sdd/CURSOR.md` |
| `sdd-requirement` | Clarifies and structures requirements | `.sdd/REQUIREMENT.md` |
| `sdd-draft` | Produces architecture design document | `.sdd/DRAFT.md` |
| `sdd-architecture-reviewer` | Read-only architecture review | `.sdd/REVIEWS.md` |
| `sdd-security-reviewer` | Read-only security review | `.sdd/REVIEWS.md` |
| `sdd-scheduler` | Selects ready leaf tasks for execution | `.sdd/TASKS.md`, `.sdd/CURSOR.md` |
| `sdd-implementer` | Executes assigned tasks within write scope | Source files only |
| `sdd-code-reviewer` | Creates CR with findings | `.sdd/reviews/CR-*.md` |
| `sdd-delivery` | Syncs TASKS / REVIEWS / CHECKLIST / CURSOR | `.sdd/` state files |

---

## Repository Structure

```
agentic-governance-sdd-workflow/
│
├── .sdd/                          # Shared durable workflow state
│   ├── CURSOR.md                  # Current position in workflow
│   ├── REQUIREMENT.md             # Confirmed requirement
│   ├── DRAFT.md                   # Architecture draft
│   ├── RFC.md                     # RFC document
│   ├── PLAN.md                    # Implementation plan
│   ├── TASKS.md                   # Task registry
│   ├── REVIEWS.md                 # Review registry
│   ├── CHECKLIST.md               # Delivery checklist
│   ├── templates/                 # Templates for each artifact
│   ├── tasks/                     # Individual task files (TK-XXXX.md)
│   ├── reviews/                   # Individual CR files (CR-XXXX.md)
│   ├── rules/                     # accepted-rules.md + rule-candidates.md
│   ├── scripts/                   # JS helper scripts
│   └── sprints/                   # Sprint archives
│
├── docs/sdd/
│   └── workflow-overview.md       # Full workflow reference
│
├── claude-code/                   # Claude Code edition
│   ├── .claude/agents/            # Project-scoped subagents
│   ├── .claude/skills/            # Invocable workflow skills
│   ├── .claude/settings.json      # Conservative deny rules
│   └── CLAUDE.md                  # Project memory
│
├── codex/                         # OpenAI Codex edition
│   ├── .codex/agents/             # Codex custom agents (.toml)
│   ├── .codex/config.toml         # Project configuration
│   └── .agents/skills/            # Workflow skills
│
├── copilot/                       # GitHub Copilot (VS Code) edition
│   ├── .github/agents/            # Custom agent definitions
│   ├── .github/prompts/           # Slash commands
│   └── .github/copilot-instructions.md
│
└── opencode/                      # OpenCode edition
    ├── .opencode/agents/          # OpenCode agents
    ├── .opencode/commands/        # Slash commands
    └── opencode.json              # Project configuration
```

---

## Quick Start

### GitHub Copilot (VS Code)
```bash
cp -r copilot/. /your/repo/
# Open in VS Code → GitHub Copilot Chat
# Select "SDD Coordinator" agent → type: /sdd-start <your requirement>
```

### Claude Code
```bash
cp -r claude-code/. /your/repo/
# cd /your/repo && claude
# Run /agents to verify subagents → type: /sdd-start <your requirement>
```

### OpenAI Codex
```bash
cp -r codex/. /your/repo/
# Trust the repo so .codex/ loads
# Type: Use $sdd-start for: <your requirement>
```

### OpenCode
```bash
cp -r opencode/. /your/repo/
# cd /your/repo && opencode
# Type: /sdd-start <your requirement>
```

---

## Governance Mechanics

### Durable State
The `.sdd/` directory persists all workflow artifacts. An agent losing context can always recover by reading `CURSOR.md` and the state files.

### Review Gates
Every design is reviewed by two read-only agents (architecture + security) before proceeding. No agent can write to source files during review phases.

### Code Review Loop
After each task execution, `sdd-code-reviewer` creates a `CR-XXXX.md`. Accepted findings are fixed before the sprint can close. High-impact findings are escalated to `rule-candidates` and may graduate to `accepted-rules`, making the team smarter over time.

### User Confirmation Points
Transitions between phases require explicit user approval. The coordinator never advances autonomously past a gate.

---

## Supported AI Platforms

| Platform | Config Dir | Command Style | Agent Format |
|---|---|---|---|
| GitHub Copilot | `.github/` | Prompt files (`.prompt.md`) | `.agent.md` |
| Claude Code | `.claude/` | Skills (`SKILL.md`) | `.md` subagents |
| OpenAI Codex | `.codex/` | Skills (`SKILL.md`) | `.toml` agents |
| OpenCode | `.opencode/` | Commands (`.md`) | `.md` agents |

---

## License

MIT

---

---

# 中文

> 一套生产级、多智能体软件开发工作流，内置治理机制——已适配所有主流 AI 编码助手。

---

## 这是什么？

大多数 AI 编码工作流是一次性的：你输入 prompt，agent 写代码，然后上线。这个项目采用了不同的思路。它将**结构化、受治理的多智能体软件开发**带入你的 AI 编码助手——配备了显式评审关卡、持久化状态、审计追踪和完整的 Sprint 生命周期。

可以把它理解为：将资深工程团队的纪律性赋予你的 AI agent——需求在设计前明确，设计在实现前评审，代码在合并前走 CR，规则随时间积累沉淀。

---

## 为什么要做这个

| 问题 | 本方案的解决方式 |
|---|---|
| Agent 会捏造需求 | `/sdd-specify` 在开始设计前强制确认 |
| 写代码前没有设计 | `/sdd-draft` + 架构/安全评审关卡 |
| 没有可追溯性 | 持久化 `.sdd/` 状态：REQUIREMENT → DRAFT → RFC → PLAN → TASKS → REVIEWS |
| 评审被跳过 | 强制 CR 循环，含 accepted/rejected 发现项 |
| Agent 丢失上下文 | `CURSOR.md` 精确记录工作流当前位置 |
| 规则无法积累 | 高影响发现项升级为 `rule-candidates` → `accepted-rules` |
| 厂商锁定 | 4 套完全相同的工作流包：Claude Code、Codex、Copilot、OpenCode |

---

## 工作流概览

```
用户需求
  └─> /sdd-specify      — 澄清并确认需求
        └─> /sdd-draft        — 架构草案
              └─> /sdd-review       — 架构 + 安全评审
                    └─> /sdd-rfc          — RFC → PLAN → TASKS → Sprint
                          └─> /sdd-run-sprint   — 执行叶子任务 + CR 循环
                                └─> /sdd-sync-state  — 同步状态文件
                                      └─> /sdd-close-sprint — 关闭或进入下一 Sprint
```

每次阶段转换都需要**用户显式确认**，没有任何阶段会被自动跳过。

---

## Agent 角色说明

| Agent | 职责 | 写入范围 |
|---|---|---|
| `sdd-coordinator` | 编排完整工作流、管理关卡和用户确认 | `.sdd/CURSOR.md` |
| `sdd-requirement` | 澄清并结构化需求 | `.sdd/REQUIREMENT.md` |
| `sdd-draft` | 产出架构设计文档 | `.sdd/DRAFT.md` |
| `sdd-architecture-reviewer` | 只读架构评审 | `.sdd/REVIEWS.md` |
| `sdd-security-reviewer` | 只读安全评审 | `.sdd/REVIEWS.md` |
| `sdd-scheduler` | 选择已就绪的叶子任务 | `.sdd/TASKS.md`, `.sdd/CURSOR.md` |
| `sdd-implementer` | 在写入范围内执行分配任务 | 仅限源文件 |
| `sdd-code-reviewer` | 创建含发现项的 CR | `.sdd/reviews/CR-*.md` |
| `sdd-delivery` | 同步 TASKS / REVIEWS / CHECKLIST / CURSOR | `.sdd/` 状态文件 |

---

## 仓库结构

```
agentic-governance-sdd-workflow/
│
├── .sdd/                          # 共享持久化工作流状态
│   ├── CURSOR.md                  # 工作流当前位置
│   ├── REQUIREMENT.md             # 已确认需求
│   ├── DRAFT.md                   # 架构草案
│   ├── RFC.md                     # RFC 文档
│   ├── PLAN.md                    # 实现计划
│   ├── TASKS.md                   # 任务注册表
│   ├── REVIEWS.md                 # 评审注册表
│   ├── CHECKLIST.md               # 交付检查单
│   ├── templates/                 # 各制品模板
│   ├── tasks/                     # 独立任务文件（TK-XXXX.md）
│   ├── reviews/                   # 独立 CR 文件（CR-XXXX.md）
│   ├── rules/                     # accepted-rules.md + rule-candidates.md
│   ├── scripts/                   # JS 辅助脚本
│   └── sprints/                   # Sprint 归档
│
├── docs/sdd/
│   └── workflow-overview.md       # 完整工作流参考文档
│
├── claude-code/                   # Claude Code 版本
│   ├── .claude/agents/            # 项目级子 Agent
│   ├── .claude/skills/            # 可调用工作流 Skills
│   ├── .claude/settings.json      # 保守拒绝规则
│   └── CLAUDE.md                  # 项目记忆文件
│
├── codex/                         # OpenAI Codex 版本
│   ├── .codex/agents/             # Codex 自定义 Agent（.toml）
│   ├── .codex/config.toml         # 项目配置
│   └── .agents/skills/            # 工作流 Skills
│
├── copilot/                       # GitHub Copilot（VS Code）版本
│   ├── .github/agents/            # 自定义 Agent 定义
│   ├── .github/prompts/           # Slash 命令
│   └── .github/copilot-instructions.md
│
└── opencode/                      # OpenCode 版本
    ├── .opencode/agents/          # OpenCode Agents
    ├── .opencode/commands/        # Slash 命令
    └── opencode.json              # 项目配置
```

---

## 快速开始

### GitHub Copilot（VS Code）
```bash
cp -r copilot/. /your/repo/
# 在 VS Code 中打开 → 打开 GitHub Copilot Chat
# 选择 "SDD Coordinator" Agent → 输入：/sdd-start <你的需求>
```

### Claude Code
```bash
cp -r claude-code/. /your/repo/
# cd /your/repo && claude
# 运行 /agents 确认子 Agent 可见 → 输入：/sdd-start <你的需求>
```

### OpenAI Codex
```bash
cp -r codex/. /your/repo/
# 信任该仓库以加载 .codex/ 配置
# 输入：Use $sdd-start for: <你的需求>
```

### OpenCode
```bash
cp -r opencode/. /your/repo/
# cd /your/repo && opencode
# 输入：/sdd-start <你的需求>
```

---

## 治理机制详解

### 持久化状态
`.sdd/` 目录持久化保存所有工作流制品。即使 Agent 丢失上下文，也可以通过读取 `CURSOR.md` 和各状态文件随时恢复。

### 评审关卡
每份设计都需要经过两个只读 Agent（架构 + 安全）的评审才能推进。在评审阶段，任何 Agent 都不能向源文件写入内容。

### 代码评审循环
每次任务执行后，`sdd-code-reviewer` 会创建一个 `CR-XXXX.md`。被接受的发现项必须修复后 Sprint 才能关闭。高影响发现项会升级为 `rule-candidates`，并可晋升为 `accepted-rules`，让团队随时间越来越聪明。

### 用户确认点
阶段之间的转换需要用户显式确认。Coordinator 永远不会在关卡处自主推进。

---

## 支持的 AI 平台

| 平台 | 配置目录 | 命令方式 | Agent 格式 |
|---|---|---|---|
| GitHub Copilot | `.github/` | Prompt 文件（`.prompt.md`） | `.agent.md` |
| Claude Code | `.claude/` | Skills（`SKILL.md`） | `.md` 子 Agent |
| OpenAI Codex | `.codex/` | Skills（`SKILL.md`） | `.toml` Agent |
| OpenCode | `.opencode/` | Commands（`.md`） | `.md` Agent |

---

## 许可证

MIT
