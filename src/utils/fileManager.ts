import * as fs from 'fs';
import * as path from 'path';
import { Task,TaskStorage } from '../types/Task';


//Define the path where our JSON file will be stored

const TASK_FILE_PATH = path.join(process.cwd(), 'tasks.json');

export class FileManager {
    // We are checking if tasks.json file exist
    private static fileExists(): boolean {
        return fs.existsSync(TASK_FILE_PATH);
    }
    // If not then we have to create it
    private static createInitialFile() : void {
        const initialData: TaskStorage = {
            tasks: [],
            nextId: 1
        };
        fs.writeFileSync(TASK_FILE_PATH, JSON.stringify(initialData, null, 2));
        console.log('created the new tasks.json file');
    }
    // Method to read all tasks from file 
    static readTasks(): TaskStorage {
        if (!this.fileExists()){
            this.createInitialFile();
            return { tasks: [], nextId: 1 };
        }
        try {
            const fileContent = fs.readFileSync(TASK_FILE_PATH, 'utf-8')
            return JSON.parse(fileContent) as TaskStorage;
        } catch(error) {
            console.error('Error in reading the tasks file:', error);
            return { tasks: [], nextId: 1 };
        }
        
    }
    // Method to write tasks to the file 
    static WriteTasks (TaskStorage: TaskStorage): void {
        try {
            fs.writeFileSync(TASK_FILE_PATH,JSON.stringify(TaskStorage,null,2));
        } catch(error) {
            console.log ('Error while writing thr task file:', error)
        }
    }

}