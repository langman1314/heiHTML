# 上下文调用优先级

> 本文件定义不同写作阶段下，上下文包中各类信息的读取优先级。
> 目的：避免上下文包无限膨胀导致重要信息被淹没和成本上升。

---

## A类：每次写作必须读取

这些是每章写作的基础约束文件，缺一不可。

| 文件 | 说明 |
|------|------|
| `00-global/writing-rules.md` | 写作总规则——最高优先级约束 |
| `00-global/forbidden.md` | 禁止事项——不可违反 |
| `03-characters/character-state.md` | 当前人物状态——最新版本 |
| `08-continuity/continuity-log.md`（最新三章） | 连续性基线——不可断裂 |
| `05-plot/foreshadowing.md`（未回收部分） | 活跃伏笔——不可遗忘 |
| `08-continuity/hidden-info.md` | 尚未揭露信息——不可提前泄露 |
| `09-style/writing-style.md` | 文风规范 |
| `09-style/banned-style.md` | 禁用表达清单 |
| 上一章正文 | 直接衔接起点 |
| 最近三章摘要 | 上下文连续性 |

**读取方式**：每次 `build_context.py` 自动包含。

---

## B类：根据本章目标选择性读取

在确定章节目标后，按需从以下文件中选择读取。

| 触发条件 | 应读取的文件 |
|----------|-------------|
| 切换地点 | `01-world/geography.md` 对应区域章节 |
| 新角色出场 | `03-characters/` 下对应角色档案 |
| 涉及阵营 | `04-factions/` 下对应阵营设定 |
| 使用能力 | `02-power-system/overview.md` + 对应能力限制 |
| 涉及法律/规则 | `01-world/law-and-rules.md` |
| 涉及历史 | `01-world/history.md`（仅相关段落） |
| 涉及终局 | `05-plot/endgame.md`（仅必要部分） |
| 涉及主线推进 | `05-plot/main-plot.md` |
| 涉及时间线 | `05-plot/timeline.md` |
| 涉及分卷结构 | `05-plot/volume-outline.md` |
| 涉及阶段剧情 | `05-plot/arc-outline.md` |
| 写前规划 | `05-plot/chapter-plans/chXXX-plan.md` |
| 对话密集章 | `09-style/dialogue-style.md` |
| 样章参考 | `09-style/sample-passages.md` |

**读取方式**：由写手提示词模板中的章节目标确定后，手动或按需追加到上下文包。

---

## C类：必要时才读取

这些文件内容量较大，且并非每章都涉及。仅在确认本章直接相关时读取。

| 文件 | 读取条件 |
|------|----------|
| `01-world/civilization.md` | 涉及文明层面的大叙事时 |
| `01-world/social-order.md` | 涉及社会结构深层描写时 |
| `01-world/daily-life.md` | 涉及晦民日常生活细节时 |
| `01-world/worldview.md` | 需要在叙事中暗示世界观真相时 |
| `02-power-system/costs.md` | 能力代价显著变化时 |
| `02-power-system/forbidden-power.md` | 涉及禁忌能力时 |
| `02-power-system/skills.md` | 技能升级时 |
| `03-characters/antagonists.md` | 以反派视角写作时 |
| `03-characters/protagonist.md` | 主角背景深层挖掘时 |
| `04-factions/faction-relations.md` | 阵营间互动复杂时 |
| `04-factions/faction-conflicts.md` | 阵营冲突为主要情节时 |
| `05-plot/unresolved-threads.md` | 需查阅已结案世界观问题时 |
| `08-continuity/revealed-info.md` | 确认某信息已向读者揭露时 |
| `08-continuity/open-loops.md` | 确认未闭合剧情钩子时 |
| `09-style/chapter-score.md` | 写后评分时 |

**读取方式**：仅当明确需要时手动追加，不作为常规上下文包内容。

---

## 后期（50章后）优化策略

随着章节数量增加，以下调整可让上下文包保持在可控大小：

1. **A类文件精简**：`foreshadowing.md` 只保留状态为"已埋下""部分回收""需要重写"的伏笔，已回收/已废弃的移入附录
2. **上一章正文精简**：只保留关键剧情节点摘要而非全文（从章节摘要中提取）
3. **最近三章摘要优先**：当上下文包超出模型限制时，优先保留摘要而非全文
4. **章节计划取代早期正文**：已写章节的原文不再需要全量保留在上下文包中，替换为对应的 `chXXX-plan.md`
5. **C类文件分块**：大文件（如历史、终局设定）预分块，只读取当前章节需要的段落而非全文

---

**原则**：上下文包不是设定全集——它是当前章节所需的**最低必要知识集**。