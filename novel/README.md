# 无光域 · AI 写作知识库

## 项目定位

本目录是小说《无光域》的完整写作知识库，专为 AI 辅助写作设计。

知识库的核心目标：**当 AI 需要续写一章时，通过上下文包获取所有必要信息，无需反复查阅外部设定文档，也不会与已建立的设定和风格冲突。**

## 目录结构

```
novel/
├── 00-global/           # 全局规则（风格总纲、禁止事项、术语表）
├── 01-world/            # 世界观设定（地理、文明、历史、社会）
├── 02-power-system/     # 力量体系（系统、裂视、庇护所）
├── 03-characters/       # 角色档案（主角、反派、重要配角、知识边界表）
│   ├── knowledge-boundary.md  # 人物知识边界——防止角色知道不该知道的信息
├── 04-factions/         # 势力组织（系统教、食名教团、五庭等）
├── 05-plot/             # 剧情架构（主线、分卷、终局、时间线、伏笔、章节计划）
│   ├── chapter-plans/   # 写前章节设计稿（ch001-plan.md, ...）
├── 06-chapters/         # 章节正文（ch001.md, ch002.md, ...）
├── 07-chapter-notes/    # 章节摘要（ch001-summary.md, ...）
├── 08-continuity/       # 连续性管理（日志、已揭/未揭信息、开放钩子）
├── 09-style/            # 风格规范（文风、对话、禁用表达、样章范例、评分标准）
├── 10-prompts/          # 提示词模板（写手、修订者、检查者、规划者、评分者）
│   ├── chapter-score.md      # 章节评分标准——防止"没错但不好看"
├── 11-context-packs/    # 上下文包（build_context.py 生成的写作上下文）
├── 12-drafts/           # 草稿区（入库前暂存，ch001-draft-v1.md）
├── scripts/             # 辅助脚本
│   ├── build_context.py     # 上下文包生成器
│   ├── check_consistency.py # 连续性检查工具
│   ├── search_novel.py      # 知识库全文搜索
│   └── update_after_chapter.py # 写后更新清单
└── README.md            # 本文件
```

## 写作工作流（完整版）

### 0. 写前规划

1. 用户提出本章写作目标
2. AI 生成 `05-plot/chapter-plans/chXXX-plan.md`（章节设计稿）
3. **用户审核计划**——确认后方可进入下一步

### 1. 准备阶段

```bash
python scripts/build_context.py --chapter <章节号> --goal "<本章写作目标>"
```

生成上下文包至 `11-context-packs/current-context.md`，按优先级调用规则（见 `00-global/context-priority.md`）控制上下文大小。

### 2. 写作阶段

- 草稿写入 `12-drafts/chXXX-draft-v1.md`（而非直接写入正式章节）
- 使用 `10-prompts/chapter-writer.md` 提示词模板
- 遵循 `09-style/` 下的全部风格规范
- 严格遵守 `00-global/forbidden.md` 的禁止事项
- 严格遵守 `03-characters/knowledge-boundary.md` 的知识边界

### 3. 检查与评分阶段

```bash
python scripts/check_consistency.py 12-drafts/chXXX-draft-v1.md
```

AI 需完成：
- 连续性检查（check_consistency.py）
- 质量评分（`10-prompts/chapter-score.md` 10维度评分）

### 4. 用户确认入库

**AI 不得自动将内容写入正式知识库。**

用户确认后，AI 执行：
1. 草稿移入 `06-chapters/chXXX.md`（正式章节）
2. 生成 `07-chapter-notes/chXXX-summary.md`（章节摘要）
3. 更新 `08-continuity/continuity-log.md`（连续性日志）
4. 更新 `08-continuity/revealed-info.md`（已揭露信息）
5. 更新 `08-continuity/hidden-info.md`（尚未揭露信息）
6. 更新 `08-continuity/open-loops.md`（开放钩子）
7. 更新 `05-plot/foreshadowing.md`（伏笔状态）
8. 更新 `03-characters/character-state.md`（人物状态）
9. 更新 `03-characters/knowledge-boundary.md`（知识边界）
10. 更新 `05-plot/timeline.md`（时间线）
11. Git commit

## 设定来源

- **最终权威**：`vue3-encyclopedia/src/data/` 下的 JS 设定源文件
- **写作引用**：本 `novel/` 目录下的 MD 文件（从 JS 源迁移而来）
- **深层逻辑**：`deep-logic.js`（世界观第一原理）
- **维度定稿**：`framework-dimensions.js`（关键问题裁定）
- **问题档案**：`deep-questions.js` / `05-plot/unresolved-threads.md`（已结案的世界观问题）

## Git 策略

- `main`：稳定版知识库
- `draft`：写作中分支
- `rewrite`：重大修订分支

每次提交前运行检查脚本，确保一致性。

---

*最后更新：写作开始前*