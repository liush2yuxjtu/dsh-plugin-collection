# [Draft — not posted] Two source-pinned plugins for DeepSeek Harness: Sidebar History + Slack-style Threads

We put together an installable **DSH Plugin Collection** using the official Custom plugin indexes format.

- **DSH Sidebar History**: searchable chat history, native TODO completion, and committed assistant summaries.
- **DSH Slack-style Threads**: independent sessions, thread continuation, and persistent task progress. This is a DSH-native UI, not an integration with Slack, and shared-channel `@deepseek` triggering is not yet implemented.

Source + index: https://github.com/liush2yuxjtu/dsh-plugin-collection

Install: Plugins → Experimental plugins → Custom plugin indexes → Discover → Add index source, then paste the raw `index.json` URL from the README.

Both repos contain actual DeepSeek API verification media and documentation. The new index distribution path still needs a separate fresh install E2E before claiming production validation.

Feedback wanted: installation compatibility, sidebar discoverability, thread navigation and mobile accessibility.
