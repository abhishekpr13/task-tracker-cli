import { TaskCommands } from './commands/taskCommands';

function main() {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.log('Please provide a command. Usage: task-cli <command> [arguments]');
        return;
    }

    const command = args[0];

    // Handle different commands
    switch (command) {
        case 'add':
            if (args[1]) {
                TaskCommands.addTask(args[1]);
            } else {
                console.log('Please provide a task description. Usage: task-cli add "Your task"');
            }
            break;
        case 'list':
            if (args[1]) {
                TaskCommands.listTasksByStatus(args[1] as 'todo' | 'in-progress' | 'done');
            } else {
                TaskCommands.listAllTasks();
            }
            break;
            
        default:
            console.log(`Unknown command: ${command}`);
            console.log('Available commands: add, list');
    }
}

main();