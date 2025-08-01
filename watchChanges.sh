#!/bin/bash

if [[ -n "$GIT_USER" && -n "$GIT_PASS" ]]; then
    git config credential.helper "!f() { echo \"username=${GIT_USER}\\npassword=${GIT_PASS}\"; }; f"
fi

# Define the command to run
COMMAND="npm run host"

# Function to run the command in the background
run_command() {
    $COMMAND &
    COMMAND_PID=$!
}

# Check for local changes and push if no changes for over 5 minutes
check_and_push_local_changes() {
    if [[ -n $(git status --porcelain) ]]; then
        echo "Local changes detected. Waiting for 5 minutes of inactivity before pushing..."
        last_change_time=$(date +%s)
        
        while [[ -n $(git status --porcelain) ]]; do
            current_time=$(date +%s)
            elapsed_time=$((current_time - last_change_time))
            
            echo "${elapsed_time}"

            if [[ $elapsed_time -ge 300 ]]; then
                echo "No local changes for 5 minutes. Pushing changes..."
                git add -A
                git commit -m "Auto-commit"
                git push
                break
            fi
            
            # Wait before checking again
            sleep 10
        done
    fi
}

# Watch for git changes and restart the command if changes are pulled
watch_directory() {
    while true; do
        # First, check and push local changes if any
        check_and_push_local_changes
        
        # Wait for a while before checking again
        sleep 30
    done
}

# Run the main command in the background
run_command

watch_directory