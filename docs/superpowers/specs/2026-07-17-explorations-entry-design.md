# Built by Randy 探索内容入口设计

日期：2026-07-17  
状态：已确认

## 目标

在 `builtbyrandy.com` 首页增加一个能够持续承载产品、系统和游戏研究的内容入口。入口首先链接飞书文档《游戏经历与产品思考》，但栏目不能被单篇文档或“随笔”定位限制。

用户可见结果：访问者能够从首页理解这不是项目案例，而是一组从个人体验出发、经过数据验证和观点修正的探索记录，并清楚知道外链需要登录飞书阅读。

## 信息架构

- 顶部导航新增锚点：`探索 / EXPLORE`，链接到 `#explore`。
- 首页在 Aisleway 与“关于与经历”之间新增独立板块。
- 板块序号使用 `03 / EXPLORATIONS`。
- 原“关于与经历”序号从 `03 / PROOF` 调整为 `04 / PROOF`。
- 不创建新的站内详情页；当前入口直接打开飞书文档。

## 中英文内容

板块标题：

- 中文：`产品与系统探索`
- 英文：`Product & System Explorations`

板块导语：

- 中文：`从真实体验提出问题，用公开数据、机制分析和反例修正判断。这里保留的不只是结论，也包括结论如何变化。`
- 英文：`Questions grounded in lived experience, tested with public data, system analysis, and counter-evidence. The record preserves not only conclusions, but how they changed.`

首个入口：

- 中文标题：`游戏经历与产品思考`
- 英文标题：`Game Experience & Product Thinking`
- 中文描述：`从 Apex 的弃坑与回归、Warframe 的长线运营等真实经历出发，分析机制体验、用户回流、数据证据和观点修正。`
- 英文描述：`Product and system analysis grounded in real play: Apex churn and return, Warframe longevity, player experience, public evidence, and revised hypotheses.`
- 标签：`机制体验 / 用户回流 / 数据证据 / 观点修正`
- 英文标签：`MECHANICS / RETURN / EVIDENCE / REVISION`
- 行动文字：`进入探索档案 / Open exploration archive`
- 辅助提示：`通过飞书阅读，需要登录 / Opens in Feishu; sign-in required`

飞书地址：

`https://my.feishu.cn/docx/NSxidUy0YohzeMxbPVGcmXOhnAh#doxcnxwN0UL3YjeTqYG84WxSyme`

## 视觉与交互

- 沿用现有编辑式排版、线条、青色强调和中英文切换，不创建新的卡片视觉系统。
- 使用一个宽幅、无嵌套卡片的内容行：左侧为标题与描述，右侧为标签、行动链接和登录提示。
- 外链在新标签页打开，并设置 `rel="noopener noreferrer"`。
- 行动链接使用外部链接图标；登录提示保持次要，不与标题争夺注意力。
- 中文和英文必须完整切换，不能只翻译标题。

## 响应式与可访问性

- 桌面端使用两列布局；移动端改为单列，标签与行动链接位于描述之后。
- 长标题和飞书提示不得造成横向滚动。
- 外链应有明确可读文本，不能只依赖图标。
- 保持现有键盘焦点、语言切换和减少动画行为；本功能不新增动画。

## 验收标准

1. 首页导航可滚动到探索板块。
2. 板块位于 Aisleway 后、“关于与经历”前。
3. 中英文文案均能完整显示和切换。
4. 飞书入口在新标签页打开，地址准确，并明确提示需要登录。
5. 1440×900、390×844 视口无文字重叠、裁切或横向滚动。
6. 现有项目、Aisleway、About、邮箱复制和语言切换不回归。

## 非目标

- 不把飞书正文复制到网站。
- 不创建博客系统、CMS、搜索、分类页或新的内容详情页。
- 不修改现有项目案例内容或首页定位。
- 不改变飞书文档的权限设置。
