"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taskCommands_1 = require("./commands/taskCommands");
function main() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.log('Please provide a command. Usage: task-cli <command> [arguments]');
        return;
    }
    const command = args[0];
    switch (command) {
        case 'add':
            if (args[1]) {
                taskCommands_1.TaskCommands.addTask(args[1]);
            }
            else {
                console.log('Please provide a task description. Usage: task-cli add "Your task"');
            }
            break;
        case 'list':
            if (args[1]) {
                taskCommands_1.TaskCommands.listTasksByStatus(args[1]);
            }
            else {
                taskCommands_1.TaskCommands.listAllTasks();
            }
            break;
        case 'mark-done':
            if (args[1]) {
                const taskId = parseInt(args[1]);
                taskCommands_1.TaskCommands.markTaskDone(taskId);
            }
            else {
                console.log('Please provide a task ID. Usage: task-cli mark-done <id>');
            }
            break;
        case 'update':
            if (args[1] && args[2]) {
                const taskId = parseInt(args[1]);
                taskCommands_1.TaskCommands.updateTask(taskId, args[2]);
            }
            else {
                console.log('Please provide task ID and description. Usage: task-cli update <id> "New description"');
            }
            break;
        default:
            console.log(`Unknown command: ${command}`);
            console.log('Available commands: add, list, mark-done, update');
            break;
        case 'delete':
            if (args[1]) {
                const taskId = parseInt(args[1]);
                taskCommands_1.TaskCommands.deleteTask(taskId);
            }
            else {
                console.log('Please provide a task ID. Usage: task-cli delete <id>');
            }
            break;
        case 'mark-in-progress':
            if (args[1]) {
                const taskId = parseInt(args[1]);
                taskCommands_1.TaskCommands.markTaskInProgress(taskId);
            }
            else {
                console.log('Please provide a task ID. Usage: task-cli mark-in-progress <id>');
            }
            break;
    }
}
main();
