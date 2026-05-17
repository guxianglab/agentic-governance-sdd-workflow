# Agentic Governance SDD Workflow — Codex Version

This repository uses Codex project instructions, Codex custom subagents, and Codex Skills to run an Agentic Governance SDD workflow.

## Codex-native files

- `AGENTS.md`: repository-level guidance loaded by Codex before work starts.
- `.codex/config.toml`: project-level Codex configuration. Codex loads project `.codex/` config only after the project is trusted.
- `.codex/agents/*.toml`: Codex custom subagents for SDD roles.
- `.agents/skills/sdd-*/SKILL.md`: reusable Codex Skills that replace slash-command-style SDD entrypoints.
- `.sdd/`: workflow state, templates, task cards, reviews, checklists, rules, and scripts.

## Start here

1. Open this repository with Codex.
2. Trust the project so `.codex/config.toml` and `.codex/agents/*.toml` are loaded.
3. Ask Codex to use the `sdd-governance` skill or one of the SDD command skills, for example:
   - `Use $sdd-start to initialize the workflow for: <your requirement>`
   - `Use $sdd-specify to clarify and write .sdd/REQUIREMENT.md`
   - `Use $sdd-draft to create .sdd/DRAFT.md`
   - `Use $sdd-review to run architecture and security review`
   - `Use $sdd-rfc to generate RFC, PLAN, TASKS, REVIEWS, CURSOR`
   - `Use $sdd-run-sprint to schedule ready leaf TKs and execute only approved scopes`
   - `Use $sdd-sync-state to reconcile TASKS, REVIEWS, CHECKLIST and CURSOR`
   - `Use $sdd-close-sprint to perform exit checks and archive`

## Workflow invariants

- Always read `.sdd/CURSOR.md` before changing workflow state.
- Do not implement before requirement, draft, review, and RFC are sufficiently clear.
- A leaf TK can close only after implementation validation, CR resolution, delivery verification, and state sync.
- A split parent TK can close only after all child TKs are done and parent-level delivery validation passes.
- If the review loop exceeds 5 rounds, stop and ask for human review.
- Parallel execution is allowed only when dependencies are met, write scopes do not conflict, and the batch size stays within 2–4 TKs.
- High-impact review findings should be captured as rule candidates and promoted to checklists/tests when accepted.

## Codex subagents

Available project-scoped custom agent types:

- `sdd_architecture_reviewer`
- `sdd_code_reviewer`
- `sdd_coordinator`
- `sdd_delivery`
- `sdd_draft`
- `sdd_implementer`
- `sdd_requirement`
- `sdd_scheduler`
- `sdd_security_reviewer`

The coordinator should spawn focused worker agents rather than letting a single session handle everything. Review agents are read-only by default; implementer and delivery roles may write within assigned scopes.
