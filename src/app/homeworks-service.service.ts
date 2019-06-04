import { Injectable } from '@angular/core';
import { Homework } from './models/homework';

@Injectable()
export class HomeworksServiceService {

  constructor() { }

  getHomeworks(): Homework[] {
    return [
      {
        id: '1',
        description: 'Una tarea',
        dueDate: new Date(),
        score: 4,
        exercises: [{
          id: '01',
          problem: 'Nombre',
          score: 2
        },
        {
          id: '02',
          problem: 'Tarea',
          score: 3
        }]
      }, {
        id: '2',
        description: 'Otra tarea',
        dueDate: new Date(),
        score: 4,
        exercises: []
      }
      
    ];
  }
}
