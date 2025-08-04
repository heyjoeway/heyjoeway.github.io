#!/bin/sh

GIT_CREDS_PRESENT="[ -n \"$GITHUB_TOKEN\" ]"
if eval "$GIT_CREDS_PRESENT"; then
    git config --global user.email "$GIT_EMAIL"
    git config --global user.name "$GIT_NAME"
    git config --global credential.helper store
    echo "https://x-access-token:${GITHUB_TOKEN}@github.com" > ~/.git-credentials
fi

echo -e 'protocol=https\nhost=github.com' | git credential fill
git config --get-regexp 'credential.*'

# Define the command to run
COMMAND="npm run host"

# Function to run the command in the background
run_command() {
    $COMMAND &
    COMMAND_PID=$!
}

# Sleep function to allow interrupts
sleep_in_seconds() {
    count=$1
    for i in $(seq 1 $count); do
        sleep 1
    done
}


# Check for local changes and push if no changes for over 5 minutes
check_and_push_local_changes() {
    if [ -n "$(git status --porcelain)" ]; then
        echo "Local changes detected. Waiting for 5 minutes of inactivity before pushing..."
        last_change_time=$(date +%s)
        
        while [ -n "$(git status --porcelain)" ]; do
            current_time=$(date +%s)
            elapsed_time=$((current_time - last_change_time))
            
            if [ $elapsed_time -ge 300 ]; then
                echo "No local changes for 5 minutes. Pushing changes..."
                git add -A
                git commit -m "Auto-commit"
                git push
                break
            fi
            
            # Wait before checking again
            sleep_in_seconds 10
        done
    fi
}

# Watch for git changes and restart the command if changes are pulled
watch_directory() {
    while true; do
        # First, check and push local changes if any
        if eval "$GIT_CREDS_PRESENT"; then
            check_and_push_local_changes
        fi

        # Wait for a while before checking again (30 seconds, 1 second at a time)
        sleep_in_seconds 30
    done
}

# Run the main command in the background
echo "Starting command: $COMMAND"
run_command

if ! eval "$GIT_CREDS_PRESENT"; then
    echo "Git credentials not set. Will not push changes automatically."
else
    echo "Watching for changes in the directory..."
fi
watch_directory