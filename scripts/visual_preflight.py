import argparse
import subprocess
import time
from pathlib import Path

def capture_browser(url: str, output_name: str, width: int = 1600, height: int = 1200):
    artifact_dir = Path(r"C:\Users\yuzet\.gemini\antigravity\brain\e46d86f5-54ef-4ce2-a76e-4b244bfe0e37")
    artifact_dir.mkdir(parents=True, exist_ok=True)
    out_file = artifact_dir / f"{output_name}.png"

    browser_exe = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
    if not Path(browser_exe).exists():
        browser_exe = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

    cmd = [
        browser_exe,
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--disable-extensions",
        f"--window-size={width},{height}",
        f"--screenshot={out_file}",
        url
    ]

    print(f"Capturing screenshot of {url} ({width}x{height}) -> {out_file}...")
    subprocess.run(cmd, capture_output=True, timeout=15)
    if out_file.exists():
        print(f"[OK] Screenshot successfully captured: {out_file}")
        print(f"Artifact Path: file:///{str(out_file).replace(chr(92), '/')}")
    else:
        print("[ERROR] Failed to capture screenshot.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Aetheria Browser Visual Preflight Capture")
    parser.add_argument("--url", default="http://localhost/", help="Target URL")
    parser.add_argument("--name", default="preflight_view", help="Output file name")
    parser.add_argument("--width", type=int, default=1600, help="Viewport width")
    parser.add_argument("--height", type=int, default=1400, help="Viewport height")
    args = parser.parse_args()

    capture_browser(args.url, args.name, args.width, args.height)
