# Agentic Governance SDD Workflow

> A production-grade, multi-agent software development workflow with built-in governance, packaged for major AI coding assistants.

English | [中文](./README.zh-CN.md)

---

## What Is This?

Most AI coding workflows are one-shot: you prompt, the agent writes code, you ship. This project takes a different approach. It brings structured, governed, multi-agent software development to your AI coding assistant, with explicit review gates, durable state, audit trails, and a full sprint lifecycle.

Think of it as bringing the discipline of a senior engineering team to your AI agent: requirements are clarified before drafting, designs are reviewed before implementation, code is reviewed before merging, and rules accumulate over time.

---

## Why This Exists

| Problem | This Solution |
|---|---|
| Agents hallucinate requirements | `/sdd-specify` forces explicit confirmation before design work starts |
| No design before coding | `/sdd-draft` plus architecture and security review gates |
| No traceability | Durable `.sdd/` state: REQUIREMENT → DRAFT → RFC → PLAN → TASKS → REVIEWS |
| Reviews are skipped | Mandatory CR loop with accepted and rejected findings |
| Agents forget context | `CURSOR.md` tracks the exact workflow position |
| Rules are not learned | High-impact findings become `rule-candidates` and then `accepted-rules` |
| Vendor lock-in | One workflow adapted for Claude Code, Codex, Copilot, and OpenCode |

---

## Workflow Overview

```text
User Requirement
  └─> /sdd-specify      — Clarify and confirm requirement
        └─> /sdd-draft        — Architecture draft
              └─> /sdd-review       — Architecture and security review
                    └─> /sdd-rfc          — RFC → PLAN → TASKS → sprint
                          └─> /sdd-run-sprint   — Execute leaf tasks with CR loop
                                └─> /sdd-sync-state  — Sync state files
                                      └─> /sdd-close-sprint — Close or continue
```

Every transition requires explicit user approval. No phase is skipped automatically.

---

## Agent Roles

| Agent | Responsibility | Write Scope |
|---|---|---|
| `sdd-coordinator` | Orchestrates the workflow, gates, and approvals | `.sdd/CURSOR.md` |
| `sdd-requirement` | Clarifies and structures requirements | `.sdd/REQUIREMENT.md` |
| `sdd-draft` | Produces the architecture design document | `.sdd/DRAFT.md` |
| `sdd-architecture-reviewer` | Read-only architecture review | `.sdd/REVIEWS.md` |
| `sdd-security-reviewer` | Read-only security review | `.sdd/REVIEWS.md` |
| `sdd-scheduler` | Selects ready leaf tasks for execution | `.sdd/TASKS.md`, `.sdd/CURSOR.md` |
| `sdd-implementer` | Executes assigned tasks within scope | Source files only |
| `sdd-code-reviewer` | Creates CRs with findings | `.sdd/reviews/CR-*.md` |
| `sdd-delivery` | Syncs TASKS, REVIEWS, CHECKLIST, and CURSOR | `.sdd/` state files |

---

## Repository Structure

```text
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
│   ├── templates/                 # Templates for workflow artifacts
│   ├── tasks/                     # Individual task files
│   ├── reviews/                   # Individual CR files
│   ├── rules/                     # Rule candidates and accepted rules
│   ├── scripts/                   # Helper scripts
│   └── sprints/                   # Sprint archives
│
├── docs/sdd/
│   └── workflow-overview.md       # Full workflow reference
│
├── claude-code/                   # Claude Code edition
├── codex/                         # OpenAI Codex edition
├── copilot/                       # GitHub Copilot edition
└── opencode/                      # OpenCode edition
```

---

## Quick Start

### GitHub Copilot (VS Code)
```bash
cp -r copilot/. /your/repo/
# Open the repo in VS Code
# Open GitHub Copilot Chat
# Select SDD Coordinator and run: /sdd-start <your requirement>
```

### Claude Code
```bash
cp -r claude-code/. /your/repo/
# cd /your/repo && claude
# Run /agents to verify subagents
# Then run: /sdd-start <your requirement>
```

### OpenAI Codex
```bash
cp -r codex/. /your/repo/
# Trust the repo so .codex/ loads
# Then run: Use $sdd-start for: <your requirement>
```

### OpenCode
```bash
cp -r opencode/. /your/repo/
# cd /your/repo && opencode
# Then run: /sdd-start <your requirement>
```

---

## Governance Mechanics

### Durable State
The `.sdd/` directory stores all workflow artifacts. If an agent loses context, it can recover by reading `CURSOR.md` and the state files.

### Review Gates
Every design is reviewed by two read-only agents, one for architecture and one for security, before implementation proceeds.

### Code Review Loop
After each task execution, `sdd-code-reviewer` creates a `CR-XXXX.md`. Accepted findings must be fixed before the sprint can close. High-impact findings are promoted into evolving rules.

### User Confirmation Points
Phase transitions require explicit user approval. The coordinator does not move past gates autonomously.

---

## Supported AI Platforms

| Platform | Config Dir | Command Style | Agent Format |
|---|---|---|---|
| GitHub Copilot | `.github/` | Prompt files | `.agent.md` |
| Claude Code | `.claude/` | Skill files | `.md` |
| OpenAI Codex | `.codex/` | Skill files | `.toml` |
| OpenCode | `.opencode/` | Command files | `.md` |

---

## License

MIT
