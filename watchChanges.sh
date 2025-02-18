#!/bin/bash

# Define the command to run
COMMAND="npm run host"

# Function to run the command in the background
run_command() {
    $COMMAND &
    COMMAND_PID=$!
}

# Function to watch for git changes and restart the command if changes are pulled
watch_directory() {
    while true; do
        # Pull the latest changes
        git_output=$(git pull)
        
        # Check if there were any changes pulled
        if [[ $git_output != *"Already up to date."* ]]; then
            echo "Changes detected. Restarting command..."
            
            # Kill the previous command
            kill $COMMAND_PID
            
            # Run the command again
            run_command
        fi
        
        # Wait for a while before checking again
        sleep 30
    done
}

# Run the initial command
run_command

# Start watching the directory for changes
watch_directory
