"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCommands = void 0;
const fileManager_1 = require("../utils/fileManager");
class TaskCommands {
    // Function to add a new task
    static addTask(description) {
        const data = fileManager_1.FileManager.readTasks();
        const newTask = {
            id: data.nextId,
            description: description,
            status: 'todo',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        data.tasks.push(newTask);
        data.nextId += 1;
        fileManager_1.FileManager.WriteTasks(data);
        console.log(`Task Added aucesfully(ID: ${newTask.id})`);
    }
    // Function to list all the task 
    static listAllTasks() {
        const data = fileManager_1.FileManager.readTasks();
        if (data.tasks.length === 0) {
            console.log('No task found :(');
            return;
        }
        console.log('\n === ALL TASKS ===');
        data.tasks.forEach(task => {
            console.log(`[${task.id}] ${task.description} -status: ${task.status}`);
        });
    }
    // Function to list all the task based on the status
    static listTasksByStatus(status) {
        const data = fileManager_1.FileManager.readTasks();
        const statusFilter = data.tasks.filter(task => task.status === status);
        if (statusFilter.length === 0) {
            console.log('No task found to filter:(');
            return;
        }
        console.log(`\n=== ${status.toUpperCase()} TASKS ===`);
        statusFilter.forEach(task => {
            console.log(`[${task.id}] ${task.description} -status: ${task.status}`);
        });
    }
    static markTaskDone(id) {
        const data = fileManager_1.FileManager.readTasks();
        const idFind = data.tasks.find(task => task.id === id);
        if (!idFind) {
            console.log('No task found');
            return;
        }
        idFind.status = 'done';
        idFind.updatedAt = new Date().toISOString();
        fileManager_1.FileManager.WriteTasks(data);
        console.log(`Task ${id} marked as done!`);
    }
    static updateTask(id, newDescription) {
        const data = fileManager_1.FileManager.readTasks();
        const idfind = data.tasks.find(task => task.id === id);
        if (!idfind) {
            console.log('No task found');
            return;
        }
        idfind.description = newDescription;
        idfind.updatedAt = new Date().toISOString();
        fileManager_1.FileManager.WriteTasks(data);
        console.log(`Task ${id} - Description updated :) `);
    }
    static deleteTask(id) {
        const data = fileManager_1.FileManager.readTasks();
        const idFind = data.tasks.find(task => task.id === id);
        if (!idFind) {
            console.log('No task found');
            return;
        }
        data.tasks = data.tasks.filter(task => task.id !== id);
        fileManager_1.FileManager.WriteTasks(data);
        console.log(`Task ${id} deleted :( `);
    }
    static markTaskInProgress(id) {
        const data = fileManager_1.FileManager.readTasks();
        const idFind = data.tasks.find(task => task.id === id);
        if (!idFind) {
            console.log('No task found');
            return;
        }
        idFind.status = "in-progress";
        idFind.updatedAt = new Date().toISOString();
        fileManager_1.FileManager.WriteTasks(data);
        console.log(`Task ${id} - Stauts updated :) `);
    }
}
exports.TaskCommands = TaskCommands;
