#!/bin/bash

BASE_URL="https://erp.finbyz.tech"

echo "=== Continuous File Downloader ==="
echo "Enter one or more file paths (comma-separated). Type 'exit' to quit."

while true; do
    read -p "> " input

    # Exit condition
    if [[ "$input" == "exit" ]]; then
        echo "Exiting..."
        break
    fi

    # Split comma-separated input into array
    IFS=',' read -ra paths <<< "$input"

    for raw_path in "${paths[@]}"; do
        # Trim whitespace
        path=$(echo "$raw_path" | xargs)

        # Skip empty inputs
        if [[ -z "$path" ]]; then
            continue
        fi

        # Remove prefix "api/fb/n" or "/web-api/fb/n" if present
        path=$(echo "$path" | sed -E 's#^/?api/fb/n/?##')

        # Remove leading slash if present
        path="${path#/}"

        # If it's already a full URL, use it directly
        if [[ "$path" == http* ]]; then
            url="$path"
        else
            url="$BASE_URL/$path"
        fi

        echo "📥 Downloading: $url"
        wget -q --show-progress "$url"

        if [[ $? -eq 0 ]]; then
            echo "✅ Download complete: $url"
        else
            echo "❌ Failed to download: $url"
        fi

        echo ""
    done
done
