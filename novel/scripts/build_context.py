from pathlib import Path
import argparse

ROOT = Path(__file__).resolve().parents[1]

# ============================================================
# 核心文件清单（每章都读取）
# ============================================================
CORE_FILES = [
    "00-global/writing-rules.md",
    "00-global/forbidden.md",
    "09-style/writing-style.md",
    "09-style/dialogue-style.md",
    "03-characters/protagonist.md",
    "03-characters/character-state.md",
    "03-characters/knowledge-boundary.md",
    "05-plot/main-plot.md",
    "05-plot/volume-outline.md",
    "05-plot/foreshadowing.md",
    "08-continuity/hidden-info.md",
    "08-continuity/revealed-info.md",
    "08-continuity/continuity-log.md",
]

# 写作提示词（每章都包含，定义输出格式）
PROMPT_FILES = [
    "10-prompts/chapter-writer.md",
]


def read_file(relative_path: str) -> str:
    """读取文件，不存在则返回占位注释。"""
    path = ROOT / relative_path
    if not path.exists():
        return f"\n\n<!-- 文件不存在：{relative_path} -->\n"
    return path.read_text(encoding="utf-8")


def read_with_source_marker(relative_path: str) -> str:
    """读取文件并加上来源标记。"""
    content = read_file(relative_path)
    return f"\n\n<!-- 来源文件：{relative_path} -->\n{content}"


def get_chapter_plan(current_chapter: int) -> str:
    """读取当前章节的写作规划。"""
    file_name = f"05-plot/chapter-plans/ch{current_chapter:03d}-plan.md"
    path = ROOT / file_name
    if not path.exists():
        return f"\n\n<!-- 来源文件：{file_name} -->\n\n<!-- 当前章节规划文件不存在 -->\n"
    content = path.read_text(encoding="utf-8")
    return f"\n\n<!-- 来源文件：{file_name} -->\n{content}"


def get_recent_chapter_summaries(current_chapter: int, count: int = 3) -> str:
    """获取最近 count 章的摘要（不包含当前章）。"""
    start = max(1, current_chapter - count)
    parts = []
    for i in range(start, current_chapter):
        file_name = f"07-chapter-notes/ch{i:03d}-summary.md"
        content = read_file(file_name)
        parts.append(f"\n\n<!-- 来源文件：{file_name} -->\n\n## 最近章节摘要：第{i:03d}章\n\n{content}")
    if not parts:
        return "\n\n<!-- 无前章摘要（首章无前文） -->"
    return "\n".join(parts)


def get_previous_chapter(current_chapter: int) -> str:
    """获取上一章正文。"""
    prev = current_chapter - 1
    if prev < 1:
        return "\n\n<!-- 无上一章正文（首章无前文） -->"
    file_name = f"06-chapters/ch{prev:03d}.md"
    content = read_file(file_name)
    return f"\n\n<!-- 来源文件：{file_name} -->\n\n# 上一章正文：第{prev:03d}章\n\n{content}"


def build_context(current_chapter: int, goal: str = "") -> str:
    """构建写作上下文包。"""
    output = []

    # 文件头
    output.append(f"# 当前写作上下文包：第{current_chapter:03d}章")
    output.append("")
    output.append("本文件由 build_context.py 自动生成，用于提供给 AI 写作模型。")
    output.append("AI 必须严格遵守本上下文包，不得与其冲突。")
    output.append("")
    output.append("---")

    # 写作目标
    if goal:
        output.append("")
        output.append("## 本章写作目标")
        output.append("")
        output.append(goal)
        output.append("")
        output.append("---")

    # 一、核心设定与规则
    output.append("")
    output.append("# 一、核心设定与规则")
    for file in CORE_FILES:
        output.append(read_with_source_marker(file))

    # 二、写作提示词
    output.append("")
    output.append("# 二、写作提示词")
    for file in PROMPT_FILES:
        output.append(read_with_source_marker(file))

    # 三、当前章节规划
    output.append("")
    output.append("# 三、当前章节规划")
    output.append(get_chapter_plan(current_chapter))

    # 四、最近章节摘要（首章为空）
    output.append("")
    output.append("# 四、最近章节摘要")
    output.append(get_recent_chapter_summaries(current_chapter))

    # 五、上一章正文（首章为空）
    output.append("")
    output.append("# 五、上一章正文")
    output.append(get_previous_chapter(current_chapter))

    return "\n".join(output)


def main():
    parser = argparse.ArgumentParser(description="无光域写作上下文包生成器 V2")
    parser.add_argument("--chapter", type=int, required=True, help="当前要写的章节号，例如 4")
    parser.add_argument("--goal", type=str, default="", help="本章写作目标")
    parser.add_argument("--out", type=str, default="11-context-packs/current-context.md",
                        help="输出路径（相对于 novel/）")
    args = parser.parse_args()

    context = build_context(args.chapter, args.goal)

    out_path = ROOT / args.out
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(context, encoding="utf-8")

    print(f"上下文包 V2 已生成：{out_path}")
    print(f"目标章节：第{args.chapter:03d}章")
    print(f"核心文件：{len(CORE_FILES)} 个")
    print(f"提示词文件：{len(PROMPT_FILES)} 个")
    print(f"包含章节规划：{'是' if get_chapter_plan(args.chapter) else '否'}")


if __name__ == "__main__":
    main()
