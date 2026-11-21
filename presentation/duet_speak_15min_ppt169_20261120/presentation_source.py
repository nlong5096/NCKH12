"""Re-export the 12 hand-authored slides with notes; no slide generator."""
from pathlib import Path
import argparse
import shutil
import subprocess
import sys

PROJECT = Path(__file__).resolve().parent

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--skill-dir', type=Path, default=Path(r'C:\Users\Eden2Three\.codex\skills\ppt-master'))
    skill = parser.parse_args().skill_dir.resolve()
    def run(script, *args):
        subprocess.run([sys.executable, str(skill/'scripts'/script), *map(str,args)], check=True)
    run('project_manager.py','validate',PROJECT)
    run('svg_quality_checker.py',PROJECT,'--canonical-authoring','--stage','final','--json')
    run('total_md_split.py',PROJECT)
    run('finalize_svg.py',PROJECT)
    run('svg_to_pptx.py',PROJECT,'-t','none','-a','none')
    output = max((PROJECT/'exports').glob('*.pptx'),key=lambda x:x.stat().st_mtime)
    shutil.copy2(output,PROJECT/'project_report_15min.pptx')
    print(PROJECT/'project_report_15min.pptx')

if __name__ == '__main__':
    main()
