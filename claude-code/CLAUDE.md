# Agentic Governance SDD Workflow — Claude Code Version

This repository is configured for Claude Code with project memory, custom subagents, project skills, and SDD state files.

## Claude-native files

- `CLAUDE.md`: project memory loaded by Claude Code sessions and teammates.
- `.claude/agents/*.md`: project-scoped custom subagents.
- `.claude/skills/*/SKILL.md`: user-invocable skills that replace `/sdd-*` workflow commands.
- `.claude/settings.json`: conservative project settings and optional agent-team env flag.
- `.sdd/`: durable workflow state, tasks, reviews, rules, checklists, scripts, and templates.

## Start here

Use these skills from Claude Code:

- `/sdd-start <requirement>`
- `/sdd-specify`
- `/sdd-draft`
- `/sdd-review`
- `/sdd-rfc`
- `/sdd-run-sprint`
- `/sdd-sync-state`
- `/sdd-close-sprint`

For full orchestration, ask Claude to run as or use the `sdd-coordinator` agent. The coordinator may spawn the allowed subagents:

- `sdd-architecture-reviewer`
- `sdd-code-reviewer`
- `sdd-coordinator`
- `sdd-delivery`
- `sdd-draft`
- `sdd-implementer`
- `sdd-requirement`
- `sdd-scheduler`
- `sdd-security-reviewer`

## SDD workflow invariants

- Always read `.sdd/CURSOR.md` before deciding the phase.
- Do not implement before requirement, draft, review, and RFC are sufficiently clear.
- Every leaf TK needs implementation validation, CR, accepted finding resolution, delivery validation, and state sync before done.
- A split parent TK closes only after all child TKs are done and parent-level delivery validation passes.
- If review loops exceed 5 rounds, stop and request human review.
- Parallel execution requires satisfied dependencies, non-conflicting write scopes, no mutex conflict, and batch size of 2–4 TKs.
- Review findings with broad impact become rule candidates and, when accepted, update checklists/tests.

## Tool discipline

- Review agents must not edit source code.
- Implementer may edit only the assigned write scope from the current TK.
- Scheduler and delivery agents may update `.sdd/` state files.
- Coordinator should ask user approval before closing a sprint, opening a new sprint, or escalating human review.
