# Agentic Governance SDD Workflow — Claude Code Edition

This ZIP is converted for Claude Code.

## What changed from Copilot-style layout

- Removed `.github/agents/*.agent.md`, `.github/prompts/*.prompt.md`, and `.vscode/settings.json`.
- Added `CLAUDE.md` as Claude Code project memory.
- Added `.claude/agents/*.md` project-scoped custom subagents.
- Added `.claude/skills/*/SKILL.md` user-invocable workflow skills.
- Added `.claude/settings.json` with conservative deny rules.
- Kept `.sdd/` as durable workflow state.

## How to use

1. Unzip into your repository root.
2. Start Claude Code from the repository root.
3. Run `/agents` to confirm the project subagents are visible.
4. Invoke a workflow skill, for example: `/sdd-start <your requirement>`.
5. For multi-agent orchestration, ask Claude to use the `sdd-coordinator` agent.

Claude Code project subagents live under `.claude/agents/`; project skills live under `.claude/skills/<skill-name>/SKILL.md`; project memory lives in `CLAUDE.md`.
