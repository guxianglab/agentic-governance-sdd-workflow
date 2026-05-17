# Agentic Governance SDD Workflow — Codex Edition

This ZIP is converted for OpenAI Codex.

## What changed from Copilot-style layout

- Removed `.github/agents/*.agent.md`, `.github/prompts/*.prompt.md`, and `.vscode/settings.json`.
- Added `.codex/config.toml` for project-level Codex configuration.
- Added `.codex/agents/*.toml` custom Codex subagents.
- Added `.agents/skills/*/SKILL.md` for SDD workflow skills.
- Kept `.sdd/` as the durable workflow state directory.

## How to use

1. Unzip into your repository root.
2. Start Codex from the repository root.
3. Trust the repository so `.codex/` configuration loads.
4. Invoke a skill, for example: `Use $sdd-start for: <your requirement>`.

Codex reads `AGENTS.md` before work, supports project `.codex/config.toml`, supports custom agents under `.codex/agents/`, and reads repo skills from `.agents/skills`. See OpenAI Codex docs for the exact behavior.
