// src/index.ts

// Import Node.js built-in modules
import * as path from 'path';

// We'll import our functions later
// import { ... } from './commands/taskCommands';

function main() {
  // Get command line arguments (skip first 2 which are node and script path)
  const args = process.argv.slice(2);
  
  // Check if user provided any arguments
  if (args.length === 0) {
    console.log('Please provide a command. Usage: task-cli <command> [arguments]');
    return;
  }

  // Extract the command (first argument)
  const command = args[0];
  
  console.log('Command received:', command);
  console.log('All arguments:', args);
  
  // We'll add command handling logic here later
}

// Run the main function
main();