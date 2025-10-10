#!/bin/bash

# === Configuration ===
BASE_URL="https://finbyz.tech"

# === Input: search folder ===
if [ -z "$1" ]; then
    echo "Usage: $0 <search_folder>"
    exit 1
fi

SEARCH_DIR="$1"

echo "🔍 Scanning '$SEARCH_DIR' for image URLs and file paths..."

# Find URLs or paths ending with image extensions
grep -rhoE "(https://finbyz\.tech/[^\\"'\)\s]+|/?api/fb/n/[^\\"'\)\s]+|/?files/[^\\"'\)\s]+|files/[^\\"'\)\s]+)\.(png|jpg|jpeg|svg|gif|webp)" "$SEARCH_DIR" > /tmp/found_images.txt

if [ ! -s /tmp/found_images.txt ]; then
    echo "⚠️ No image URLs found in '$SEARCH_DIR'."
    exit 0
fi

echo "🧹 Cleaning extracted paths and downloading..."
while IFS= read -r raw_path; do
    # Skip empty lines
    [[ -z "$raw_path" ]] && continue

    # Remove prefix /api/fb/n or api/fb/n
    clean_path=$(echo "$raw_path" | sed -E 's#^/?api/fb/n/?##')

    # Remove leading slash
    clean_path="${clean_path#/}"

    # Build full URL
    if [[ "$clean_path" == http* ]]; then
        url="$clean_path"
        rel_path=$(echo "$clean_path" | sed -E 's#https://[^/]+/##')
    else
        url="$BASE_URL/$clean_path"
        rel_path="$clean_path"
    fi

    # Local destination path (relative to current directory)
    dest_path="./$rel_path"
    dest_dir=$(dirname "$dest_path")
    mkdir -p "$dest_dir"

    echo "📥 Downloading: $url → $dest_path"
    wget -q --show-progress -O "$dest_path" "$url"

    if [[ $? -eq 0 ]]; then
        echo "✅ Downloaded: $rel_path"
    else
        echo "❌ Failed: $url"
    fi

done < /tmp/found_images.txt

echo "🏁 Done! All image files downloaded."
