from pathlib import Path
import argparse

ROOT = Path(__file__).resolve().parents[1]

SEARCH_DIRS = [
    "00-global",
    "01-world",
    "02-power-system",
    "03-characters",
    "04-factions",
    "05-plot",
    "07-chapter-notes",
    "08-continuity",
    "09-style"
]


def search(keyword: str):
    results = []
    for directory in SEARCH_DIRS:
        dir_path = ROOT / directory
        if not dir_path.exists():
            continue

        for file in dir_path.rglob("*.md"):
            text = file.read_text(encoding="utf-8")
            if keyword in text:
                lines = text.splitlines()
                matched = []
                for idx, line in enumerate(lines, start=1):
                    if keyword in line:
                        matched.append((idx, line.strip()))
                results.append((file.relative_to(ROOT), matched))

    return results


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("keyword", type=str, help="要搜索的关键词")
    args = parser.parse_args()

    results = search(args.keyword)

    if not results:
        print("没有找到相关内容。")
        return

    for file, matches in results:
        print(f"\n# 文件：{file}")
        for line_no, line in matches:
            print(f"第 {line_no} 行：{line}")


if __name__ == "__main__":
    main()
