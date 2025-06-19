import { todo } from "node:test";
import { Task,TaskStorage } from "../types/Task";
import { FileManager } from "../utils/fileManager";


export class TaskCommands {
    // Function to add a new task
    static addTask(description: string): void{
        const data = FileManager.readTasks();

        const newTask: Task = {
            id: data.nextId,
            description: description,
            status: 'todo',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()

        };
        data.tasks.push(newTask)
        data.nextId+=1
        FileManager.WriteTasks(data);

        console.log(`Task Added aucesfully(ID: ${newTask.id})`);
    }

    // Function to list all the task 

    static listAllTasks(): void {
        const data = FileManager.readTasks();

        if (data.tasks.length === 0){
            console.log('No task found :(');
            return ;
        }

        console.log('\n === ALL TASKS ===')

        data.tasks.forEach (task =>{
            console.log(`[${task.id}] ${task.description} -status: ${task.status}`)
        });
    }

    // Function to list all the task based on the status

    static listTasksByStatus (status: 'todo' | 'in-progress' | 'done') :void {
        const data = FileManager.readTasks();

        const statusFilter = data.tasks.filter(task => task.status === status)

        if (statusFilter.length === 0){
            console.log('No task found to filter:(');
            return ;
        }
        
        console.log(`\n=== ${status.toUpperCase()} TASKS ===`);

        statusFilter.forEach (task =>{
            console.log(`[${task.id}] ${task.description} -status: ${task.status}`)
        }); 
    }
}