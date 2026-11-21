"""Rebuild the editable PPTX from hand-authored SVG sources using ppt-master."""
from __future__ import annotations
import argparse
from pathlib import Path
import shutil
import subprocess
import sys

PROJECT = Path(__file__).resolve().parent

def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--skill-dir', type=Path, default=Path(r'C:\Users\Eden2Three\.codex\skills\ppt-master'))
    args = parser.parse_args()
    skill = args.skill_dir.resolve()
    def run(script: str, *extra: str) -> None:
        subprocess.run([sys.executable, str(skill / 'scripts' / script), str(PROJECT), *extra], check=True)
    subprocess.run(
        [sys.executable, str(skill / 'scripts' / 'project_manager.py'), 'validate', str(PROJECT)], check=True)
    run('svg_quality_checker.py', '--canonical-authoring', '--stage', 'final', '--json')
    run('total_md_split.py')
    run('finalize_svg.py')
    run('svg_to_pptx.py')
    latest = max((PROJECT / 'exports').glob('*.pptx'), key=lambda p: p.stat().st_mtime)
    target = PROJECT / 'project_report.pptx'
    shutil.copy2(latest, target)
    print(f'PPTX ready: {target}')

if __name__ == '__main__':
    main()
