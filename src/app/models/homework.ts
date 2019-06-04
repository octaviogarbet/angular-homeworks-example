import { Exercise } from './exercise';

export interface Homework {
    id: string;
    description: string;
    dueDate: Date;
    score: number;
    exercises: Exercise[];
}