#!/usr/bin/env python3
"""
Generate website favicons, app icons, and optimized logo assets from any source image.

Usage:
    python3 scripts/generate-icons.py [path_to_source_image] [--update-components]

Examples:
    python3 scripts/generate-icons.py public/logo_full_3.png
    python3 scripts/generate-icons.py public/another_logo.png --update-components
    pnpm run generate:icons public/new_logo.png
"""

import sys
import os
import argparse
import re
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Error: Pillow (PIL) is required. Install it using: pip3 install pillow")
    sys.exit(1)


def make_square(image: Image.Image) -> Image.Image:
    """Pad non-square image to a square with transparent background, keeping aspect ratio."""
    width, height = image.size
    if width == height:
        return image

    max_dim = max(width, height)
    square_img = Image.new("RGBA", (max_dim, max_dim), (0, 0, 0, 0))
    offset = ((max_dim - width) // 2, (max_dim - height) // 2)
    square_img.paste(image, offset)
    return square_img


def update_component_imports(repo_root: Path, source_path: Path):
    """Optionally update the logo imports in Navbar.tsx and layout.tsx to point to the new source image."""
    rel_path = os.path.relpath(source_path, repo_root)
    file_name = source_path.name

    targets = [
        repo_root / "app" / "components" / "Navbar.tsx",
        repo_root / "app" / "book" / "layout.tsx"
    ]

    pattern = re.compile(r'import websiteLogo from "\.\./\.\./public/[^"]+";')
    replacement = f'import websiteLogo from "../../public/{file_name}";'

    for target in targets:
        if target.exists():
            content = target.read_text(encoding="utf-8")
            if pattern.search(content):
                new_content = pattern.sub(replacement, content)
                target.write_text(new_content, encoding="utf-8")
                print(f"  ✓ Updated import in {target.relative_to(repo_root)} -> {replacement}")


def generate_assets(source_path_str: str, update_components: bool = False):
    source_path = Path(source_path_str).resolve()
    repo_root = Path(__file__).resolve().parent.parent

    if not source_path.exists():
        print(f"Error: Source image not found at '{source_path}'")
        sys.exit(1)

    print(f"Opening source image: {source_path}")
    with Image.open(source_path) as raw_img:
        img = raw_img.convert("RGBA")
        img = make_square(img)

        # Output targets and dimensions
        targets = [
            # Public logos
            (repo_root / "public" / "logo.png", 512, "PNG", {}),
            (repo_root / "public" / "logo.webp", 512, "WEBP", {"quality": 95}),
            # Public favicons & icons
            (repo_root / "public" / "favicon-16x16.png", 16, "PNG", {}),
            (repo_root / "public" / "favicon-32x32.png", 32, "PNG", {}),
            (repo_root / "public" / "apple-touch-icon.png", 180, "PNG", {}),
            (repo_root / "public" / "icon-192.png", 192, "PNG", {}),
            # App directory icons (Next.js App Router metadata conventions)
            (repo_root / "app" / "icon.png", 192, "PNG", {}),
            (repo_root / "app" / "apple-icon.png", 180, "PNG", {}),
        ]

        print("\nGenerating image assets...")
        for out_path, size, fmt, extra_args in targets:
            out_path.parent.mkdir(parents=True, exist_ok=True)
            resized = img.resize((size, size), Image.Resampling.LANCZOS)
            resized.save(out_path, format=fmt, **extra_args)
            print(f"  ✓ [{fmt:>4}] {out_path.relative_to(repo_root)} ({size}x{size})")

        # Favicon ICO files with multi-resolution frames
        ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
        ico_targets = [
            repo_root / "public" / "favicon.ico",
            repo_root / "app" / "favicon.ico"
        ]

        for ico_path in ico_targets:
            ico_path.parent.mkdir(parents=True, exist_ok=True)
            img.save(ico_path, format="ICO", sizes=ico_sizes)
            print(f"  ✓ [ ICO] {ico_path.relative_to(repo_root)} (multi-size: 16-256)")

    if update_components:
        print("\nUpdating component imports...")
        update_component_imports(repo_root, source_path)

    print("\nAll assets generated successfully!")


def main():
    repo_root = Path(__file__).resolve().parent.parent
    default_source = repo_root / "public" / "logo_full_3.png"
    if not default_source.exists():
        default_source = repo_root / "public" / "logo.png"

    parser = argparse.ArgumentParser(description="Generate website favicons and icons from an image.")
    parser.add_argument(
        "source",
        nargs="?",
        default=str(default_source),
        help=f"Path to source image (default: {default_source.relative_to(repo_root) if default_source.exists() else 'public/logo_full_3.png'})"
    )
    parser.add_argument(
        "--update-components",
        action="store_true",
        help="Update websiteLogo imports in Navbar.tsx and layout.tsx to this source image"
    )

    args = parser.parse_args()
    generate_assets(args.source, update_components=args.update_components)


if __name__ == "__main__":
    main()

