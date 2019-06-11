import { Component, OnInit } from '@angular/core';
import { HomeworksServiceService } from '../../homeworks-service.service';
import { Homework } from '../../models/homework';

@Component({
  selector: 'app-homework-list',
  templateUrl: './homework-list.component.html',
  styleUrls: ['./homework-list.component.scss']
})
export class HomeworkListComponent implements OnInit {
  pageTitle: string = "Homeworks List";
  listFilter = '';
  showExercises: boolean = false;
  homeworks: Homework[];

  constructor(
    private homeworkService: HomeworksServiceService
  ) {
    this.homeworks = new Array<Homework>();
  }

  ngOnInit(): void {
    this.homeworks = this.homeworkService.getHomeworks();
  }

  toggleExercises(): void {
    this.showExercises = !this.showExercises;
  }

  onRatingClicked(message:string):void {
    this.pageTitle = 'HomeworksList ' + message;
  }

}
