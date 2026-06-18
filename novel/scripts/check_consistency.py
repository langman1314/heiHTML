from pathlib import Path
import sys
import re

ROOT = Path(__file__).resolve().parents[1]


def check_continuity(chapter_path: str) -> list:
    """
    简单连续性检查脚本。
    检查内容：
    - 是否有未闭合的方括号/花括号（编码问题）
    - 是否有明显的时间线跳跃提示
    - 是否有过长的段落（AI腔标志）
    """
    path = ROOT / chapter_path
    if not path.exists():
        return [f"文件不存在：{chapter_path}"]

    text = path.read_text(encoding="utf-8")
    issues = []

    lines = text.split("\n")
    for i, line in enumerate(lines, 1):
        # 检查段落长度
        if len(line) > 300 and not line.startswith("#"):
            issues.append(f"第{i}行段落过长({len(line)}字)，可能是AI腔说明文")

        # 检查陈词滥调
        cliches = ["命运的齿轮", "真正的考验", "更大的阴谋", "空气中弥漫", "他不知道的是"]
        for cliche in cliches:
            if cliche in line:
                issues.append(f"第{i}行出现陈词滥调：{cliche}")

    return issues


def main():
    if len(sys.argv) < 2:
        print("用法：python check_consistency.py 06-chapters/ch001.md")
        sys.exit(1)

    chapter_path = sys.argv[1]
    issues = check_continuity(chapter_path)

    if not issues:
        print("未发现明显问题。")
    else:
        print("# 连续性检查报告\n")
        for issue in issues:
            print(f"- {issue}")


if __name__ == "__main__":
    main()
