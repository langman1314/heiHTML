from pathlib import Path
import argparse

ROOT = Path(__file__).resolve().parents[1]

FILES_TO_UPDATE = {
    "summary": "07-chapter-notes/ch{chapter:03d}-summary.md",
    "continuity": "08-continuity/continuity-log.md",
    "character": "03-characters/character-state.md",
    "foreshadowing": "05-plot/foreshadowing.md",
    "revealed": "08-continuity/revealed-info.md",
    "hidden": "08-continuity/hidden-info.md",
    "openloops": "08-continuity/open-loops.md"
}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--chapter", type=int, required=True, help="刚写完的章节号")
    args = parser.parse_args()

    print(f"# 写后知识库更新建议：第{args.chapter:03d}章\n")
    print("请根据最新章节正文，将以下内容写入对应文件：\n")

    for key, path_template in FILES_TO_UPDATE.items():
        file_path = ROOT / path_template.format(chapter=args.chapter)
        print(f"## {file_path.relative_to(ROOT)}")
        print()

    print("---")
    print("提示：运行此脚本后，请手动将 AI 输出的更新内容写入上述文件。")


if __name__ == "__main__":
    main()
