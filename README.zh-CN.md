# DSH 插件集合

[English](README.md) · [简体中文](README.zh-CN.md)

用于 DeepSeek Harness（DSH）的第三方插件索引。每个插件固定到明确的 Git 提交，方便检查源码与安装。

## 安装

打开 **Plugins → Experimental plugins → Custom plugin indexes → Discover → Add index source**，添加：

```text
https://raw.githubusercontent.com/liush2yuxjtu/dsh-plugin-collection/main/index.json
```

首次安装时 DSH 会显示插件来源并请求确认。索引采用[官方格式](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/plugin-market.md)。

## 当前插件

- [DSH Sidebar History](https://github.com/liush2yuxjtu/dsh-sidebar-history)：会话历史搜索、TODO 进度、助手摘要。版本 0.2.2。
- [DSH Slack](https://github.com/liush2yuxjtu/dsh-slack)：独立对话、Thread、TODO 和摘要。版本 0.1.0。它暂不提供共享频道的 `@deepseek` 触发功能。

两项目的基础测试已复查，但通过此索引安装的实时 E2E 尚未验收。不得把旧真实 API 视频当作本次验收结果。发布前后检查流程见 [SKILL.md](skills/publish-dsh-plugin/SKILL.md)。
