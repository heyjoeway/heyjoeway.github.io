#!/bin/bash

# Get the directory of the script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SRC_DIR="$SCRIPT_DIR/src"

# Function to recursively convert file extensions to lowercase
convert_extensions_to_lowercase() {
    local dir="$1"
    find "$dir" -type f | while read -r file; do
        ext="${file##*.}"
        if [[ "$ext" =~ [A-Z] ]]; then
            lowercase_ext=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
            new_file="${file%.*}.$lowercase_ext"
            mv "$file" "$new_file"
        fi
    done
}

# Call the function with the src directory
convert_extensions_to_lowercase "$SRC_DIR"