import { Injectable, Inject } from '@angular/core';
import { Homework } from './models/homework';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HomeworksServiceService {

  homeworksUrl = '/api/permisos/';

  constructor(
    @Inject('ApiEndpoint') private apiEndpoint: string,
    private httpClient: HttpClient
  ) {
    this.homeworksUrl = this.apiEndpoint + this.homeworksUrl;
  }

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

  createHomework(homework: Homework) {
    return this.httpClient.post(this.homeworksUrl, homework, this.getHttpOptions())
  }

  getHttpOptions(): HttpOptions {
    const token = localStorage.getItem('authToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return httpOptions;
  }

}

export interface HttpOptions {
  headers: HttpHeaders;
}
