export interface Task {
    id: number;
    description: string;
    status: 'todo' | 'in-progress' | 'done';
    createdAt: string;
    updatedAt: string;
}

export interface TaskStorage {
    tasks: Task[];
    nextID: number; //It will help us to keep the track of the next id we will assign
}