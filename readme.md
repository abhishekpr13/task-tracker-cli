Task Tracker CLI
A simple command-line interface (CLI) application to track and manage your tasks. Built with TypeScript and Node.js.
Features

✅ Add new tasks
📝 Update task descriptions
🗑️ Delete tasks
✔️ Mark tasks as done
🔄 Mark tasks as in progress
📋 List all tasks or filter by status
💾 Persistent storage using JSON file

Installation
Prerequisites

Node.js (version 14 or higher)
npm (comes with Node.js)

Setup

Clone this repository:
bashgit clone <your-repo-url>
cd task-tracker-cli

Install dependencies:
bashnpm install

Build the project:
bashnpm run build


Usage
Development Mode
For development and testing, use:
bashnpm run dev <command> [arguments]
Production Mode
After building, run:
bashnpm start <command> [arguments]
Commands
Add a Task
bashnpm run dev add "Task description"
Example:
bashnpm run dev add "Buy groceries"
# Output: Task added successfully (ID: 1)
List Tasks
List All Tasks
bashnpm run dev list
List Tasks by Status
bashnpm run dev list <status>
Available statuses: todo, in-progress, done
Examples:
bashnpm run dev list todo          # Show only todo tasks
npm run dev list in-progress   # Show only in-progress tasks
npm run dev list done          # Show only completed tasks
Update a Task
bashnpm run dev update <id> "New description"
Example:
bashnpm run dev update 1 "Buy groceries and cook dinner"
Mark Task Status
Mark as In Progress
bashnpm run dev mark-in-progress <id>
Mark as Done
bashnpm run dev mark-done <id>
Examples:
bashnpm run dev mark-in-progress 1  # Mark task 1 as in progress
npm run dev mark-done 2         # Mark task 2 as completed
Delete a Task
bashnpm run dev delete <id>
Example:
bashnpm run dev delete 1
Task Properties
Each task contains the following information:

id: Unique identifier (auto-generated)
description: Task description
status: Current status (todo, in-progress, done)
createdAt: Creation timestamp
updatedAt: Last modification timestamp

Data Storage
Tasks are stored in a tasks.json file in the project root directory. The file is automatically created when you add your first task.
Example tasks.json structure:
json{
  "tasks": [
    {
      "id": 1,
      "description": "Buy groceries",
      "status": "todo",
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ],
  "nextId": 2
}
Examples
Complete Workflow Example
bash# Add tasks
npm run dev add "Learn TypeScript"
npm run dev add "Build CLI application"
npm run dev add "Write documentation"

# View all tasks
npm run dev list

# Start working on first task
npm run dev mark-in-progress 1

# Complete second task
npm run dev mark-done 2

# Update third task description
npm run dev update 3 "Write comprehensive documentation"

# View tasks by status
npm run dev list in-progress
npm run dev list done
npm run dev list todo

# Delete a task
npm run dev delete 1
Error Handling
The application handles common errors gracefully:

Invalid task IDs
Missing required arguments
Non-existent tasks
File system errors

Development
Available Scripts

npm run dev - Run in development mode with ts-node
npm run build - Compile TypeScript to JavaScript
npm start - Run compiled JavaScript

Project Structure
task-tracker-cli/
├── src/
│   ├── types/
│   │   └── Task.ts          # TypeScript interfaces
│   ├── utils/
│   │   └── fileManager.ts   # File operations
│   ├── commands/
│   │   └── taskCommands.ts  # Task operations
│   └── index.ts             # Main entry point
├── dist/                    # Compiled JavaScript (after build)
├── tasks.json              # Task data (created automatically)
├── package.json
├── tsconfig.json
└── README.md
Technologies Used

TypeScript - Type-safe JavaScript
Node.js - Runtime environment
File System (fs) - For data persistence
JSON - Data storage format


https://roadmap.sh/projects/task-tracker