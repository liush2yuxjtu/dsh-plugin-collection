# /publish-dsh-plugin

Purpose: verify and distribute DSH plugins without opening routine PRs or issues.

## Gates

1. Read the project's current `AGENTS.md` and `.agents/skills/verify/SKILL.md`. Never replace a project-specific gate.
2. Pull the current main branch and check it is clean; preserve other agents' changes.
3. Run existing `/verify`, `npm pack --dry-run --json`, full media and live E2E checks (fresh actual DeepSeek API, actual DSH host, no mocks). Missing secrets or failed checks = BLOCKED, not PASS.
4. Check installed host DSH version, package metadata, `files` contents, local language links, and LICENSE. Scan the tarball for secrets and unrelated private data.
5. Use npm only after `npm whoami` succeeds and the target name is demonstrably owned by this publisher. If the name is occupied, use a verified owned scope instead. Never publish under someone else's package name.
6. Commit directly to main only when project AGENTS.md checks pass. For Git source entries, use the full 40-character pushed commit; validate index JSON. Reverify index HTTPS returns HTTP 200 with no redirect.
7. Verify index installation into a fresh DSH profile and real API/browser workflows. Check package entry points and media provenance. State clearly what has NOT been tested.
8. Prepare public announcement drafts. Publish outward-facing posts only after the applicable user approval. No automation should silently announce an unverified release.
9. Capture baseline discoverability: exact-name queries, registry inclusion, version listing, GitHub stars, npm download counts if a package is actually published. Missing metrics are UNKNOWN, not zero.

## Quality contract

- Source artifacts A → project facts B → runtime checks C → user intent D.
- Real screenshots and GIFs come from real browser sessions. Synthetic visual concepts must be labeled.
- Prefer explicit failures and reversible drafts over forced publication.
