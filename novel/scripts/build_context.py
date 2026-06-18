from pathlib import Path
import argparse

ROOT = Path(__file__).resolve().parents[1]

FILES_ALWAYS_INCLUDE = [
    "00-global/writing-rules.md",
    "00-global/forbidden.md",
    "09-style/writing-style.md",
    "09-style/dialogue-style.md",
    "03-characters/character-state.md",
    "05-plot/foreshadowing.md",
    "08-continuity/continuity-log.md",
    "08-continuity/revealed-info.md",
    "08-continuity/hidden-info.md",
    "08-continuity/open-loops.md",
    "05-plot/timeline.md",
    "05-plot/main-plot.md",
    "05-plot/volume-outline.md",
    "02-power-system/overview.md",
    "02-power-system/limitations.md"
]


def read_file(relative_path: str) -> str:
    path = ROOT / relative_path
    if not path.exists():
        return f"\n\n<!-- 文件不存在：{relative_path} -->\n"
    return path.read_text(encoding="utf-8")


def get_recent_chapter_summaries(current_chapter: int, count: int = 3) -> str:
    start = max(1, current_chapter - count)
    parts = []
    for i in range(start, current_chapter):
        file_name = f"07-chapter-notes/ch{i:03d}-summary.md"
        content = read_file(file_name)
        parts.append(f"\n\n## 最近章节摘要：第{i:03d}章\n\n{content}")
    return "\n".join(parts)


def get_previous_chapter(current_chapter: int) -> str:
    prev = current_chapter - 1
    if prev < 1:
        return ""
    file_name = f"06-chapters/ch{prev:03d}.md"
    content = read_file(file_name)
    return f"\n\n# 上一章正文：第{prev:03d}章\n\n{content}"


def build_context(current_chapter: int, goal: str = "") -> str:
    output = []

    output.append(f"# 当前写作上下文包：第{current_chapter:03d}章")
    output.append("\n本文件由 build_context.py 自动生成，用于提供给 AI 写作模型。")
    output.append("\nAI 必须严格遵守本上下文包，不得与其冲突。")

    if goal:
        output.append("\n\n# 本章写作目标\n")
        output.append(goal)

    output.append("\n\n# 一、固定核心规则\n")
    for file in FILES_ALWAYS_INCLUDE:
        output.append(f"\n\n<!-- 来源文件：{file} -->\n")
        output.append(read_file(file))

    output.append("\n\n# 二、最近三章摘要\n")
    output.append(get_recent_chapter_summaries(current_chapter))

    output.append("\n\n# 三、上一章正文\n")
    output.append(get_previous_chapter(current_chapter))

    return "\n".join(output)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--chapter", type=int, required=True, help="当前要写的章节号，例如 4")
    parser.add_argument("--goal", type=str, default="", help="本章写作目标")
    args = parser.parse_args()

    context = build_context(args.chapter, args.goal)

    out_path = ROOT / "11-context-packs/current-context.md"
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(context, encoding="utf-8")

    print(f"已生成上下文包：{out_path}")


if __name__ == "__main__":
    main()
