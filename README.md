# DSH Plugin Collection | DeepSeek Harness Plugins

[English](README.md) · [简体中文](README.zh-CN.md)

A source-pinned community plugin index for **DeepSeek Harness (DSH)**. Discover, audit and install versioned DSH plugins. This repository is an index, **not an npm package**, and does not require an npm publisher account.

## Add to DSH Discover

Open **Plugins → Experimental plugins → Custom plugin indexes → Discover → Add index source**, then paste:

```text
https://raw.githubusercontent.com/liush2yuxjtu/dsh-plugin-collection/main/index.json
```

DSH displays the pinned Git source and asks for confirmation before installation. The source format follows the [official DSH plugin index guide](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/plugin-market.md).

## Plugins

| Plugin | Function | Source | Tested repository baseline |
| --- | --- | --- | --- |
| [DSH Sidebar History](https://github.com/liush2yuxjtu/dsh-sidebar-history) | Session history, TODO and assistant previews | Git commit `32bfc10` | v0.2.2; verified real E2E and OIDC release PASS |
| [DSH Slack](https://github.com/liush2yuxjtu/dsh-slack) | Slack-style sessions and threads | Git commit `f4bdad8` | v0.1.0; 9 tests and static checks PASS |

**Scope and limitations:** Tests above were rerun on 2026-11-10. They are not fresh real API acceptance of the index install path. The plugin README files provide prior real API media evidence. DSH Slack is **not** yet an `@deepseek` shared-channel chat bot; it is a threaded session UI. The `dsh-slack` npm name is already used by another publication, so this index deliberately uses a **Git** source, not npm.

## Verification and publication

```sh
node scripts/verify-index.mjs
```

Publication workflow: [publish-dsh-plugin skill](skills/publish-dsh-plugin/SKILL.md). Community draft: [GitHub Discussions](drafts/github-discussion.md). Do not post drafts automatically.

## Safety

Plugin indexes are third-party install instructions. Inspect source and compatibility before installing. Every index entry pins a full commit SHA. Published registry metadata does not imply a security review or verified runtime compatibility.
