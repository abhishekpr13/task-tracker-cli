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
    static markTaskDone(id:number): void {
        const data = FileManager.readTasks();
        const idFind = data.tasks.find(task =>task.id === id);

       if(!idFind) {
        console.log('No task found');
        return;
       }
       idFind.status = 'done';
       idFind.updatedAt = new Date().toISOString();

       FileManager.WriteTasks(data);

       console.log(`Task ${id} marked as done!`);
    }
    static updateTask (id: number,newDescription: string ): void{
        const data = FileManager.readTasks();

        const idfind = data.tasks.find(task => task.id === id);
        if(!idfind) {
            console.log('No task found');
            return;
        }

        idfind.description = newDescription
        idfind.updatedAt = new Date().toISOString();

        FileManager.WriteTasks(data);

        console.log(`Task ${id} - Description updated :) `)
    }

    static deleteTask(id: number):void {
        const data = FileManager.readTasks();
        const idFind = data.tasks.find(task => task.id === id);
        if(!idFind) {
            console.log('No task found');
            return;
        }

        data.tasks = data.tasks.filter(task => task.id !== id);
        FileManager.WriteTasks(data);

        console.log(`Task ${id} deleted :( `)

    }
    static markTaskInProgress (id: number): void {
        const data = FileManager.readTasks();

        const idFind = data.tasks.find(task =>task.id === id);
        if(!idFind) {
            console.log('No task found');
            return;
        }
        idFind.status = "in-progress"
        idFind.updatedAt = new Date().toISOString();

        FileManager.WriteTasks(data);

        console.log(`Task ${id} - Stauts updated :) `)

    }


}