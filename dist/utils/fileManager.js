"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileManager = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
//Define the path where our JSON file will be stored
const TASK_FILE_PATH = path.join(process.cwd(), 'tasks.json');
class FileManager {
    // We are checking if tasks.json file exist
    static fileExists() {
        return fs.existsSync(TASK_FILE_PATH);
    }
    // If not then we have to create it
    static createInitialFile() {
        const initialData = {
            tasks: [],
            nextId: 1
        };
        fs.writeFileSync(TASK_FILE_PATH, JSON.stringify(initialData, null, 2));
        console.log('created the new tasks.json file');
    }
    // Method to read all tasks from file 
    static readTasks() {
        if (!this.fileExists()) {
            this.createInitialFile();
            return { tasks: [], nextId: 1 };
        }
        try {
            const fileContent = fs.readFileSync(TASK_FILE_PATH, 'utf-8');
            return JSON.parse(fileContent);
        }
        catch (error) {
            console.error('Error in reading the tasks file:', error);
            return { tasks: [], nextId: 1 };
        }
    }
    // Method to write tasks to the file 
    static WriteTasks(TaskStorage) {
        try {
            fs.writeFileSync(TASK_FILE_PATH, JSON.stringify(TaskStorage, null, 2));
        }
        catch (error) {
            console.log('Error while writing thr task file:', error);
        }
    }
}
exports.FileManager = FileManager;
