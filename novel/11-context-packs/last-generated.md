# 上下文包生成记录

> 本文件记录每次 `build_context.py` 生成的上下文包信息。
> 用于追踪不同章节上下文包的版本、内容、以及对写作的影响。

---

## 生成记录格式

### 生成时间

YYYY-MM-DD HH:MM

### 目标章节

第XXX章

### 写作目标

（传入 --goal 的参数）

### 包含文件清单

- 00-global/writing-rules.md
- 00-global/forbidden.md
- 09-style/writing-style.md
- 09-style/dialogue-style.md
- 03-characters/character-state.md
- 05-plot/foreshadowing.md
- 08-continuity/continuity-log.md
- 08-continuity/revealed-info.md
- 08-continuity/hidden-info.md
- 08-continuity/open-loops.md
- 05-plot/timeline.md
- 05-plot/main-plot.md
- 05-plot/volume-outline.md
- 02-power-system/overview.md
- 02-power-system/limitations.md
- 最近三章摘要
- 上一章正文

### 输出文件

`11-context-packs/current-context.md`（被覆盖）

### 验证结果

- 文件完整性：
- 引用链接正确性：
- 格式可读性：

### 备注

---

## 生成记录 #001

### 生成时间

2026-06-19（首次测试）

### 目标章节

第001章

### 写作目标

测试上下文生成

### 包含文件清单

- 00-global/writing-rules.md
- 00-global/forbidden.md
- 09-style/writing-style.md
- 09-style/dialogue-style.md
- 03-characters/character-state.md
- 05-plot/foreshadowing.md
- 08-continuity/continuity-log.md
- 08-continuity/revealed-info.md
- 08-continuity/hidden-info.md
- 08-continuity/open-loops.md
- 05-plot/timeline.md
- 05-plot/main-plot.md
- 05-plot/volume-outline.md
- 02-power-system/overview.md
- 02-power-system/limitations.md

（最近三章摘要和上一章正文为空——首章无前文）

### 输出文件

`11-context-packs/current-context.md`（1069行）

### 验证结果

- 文件完整性：通过
- 引用链接正确性：通过（有文件不存在的提示注明）
- 格式可读性：通过

### 备注

首次测试运行成功。文件不存在的提示来自：character-state.md（模板状态待填充）、foreshadowing.md（模板状态待填充）、continuity-log.md/revealed-info.md/hidden-info.md/open-loops.md（模板状态待填充）、timeline.md、main-plot.md、volume-outline.md、chapter-notes（空）、ch001.md（无正文）。

---

## 历史生成记录

（按时间从新到旧排列）