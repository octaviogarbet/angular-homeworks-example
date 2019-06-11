import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Homework } from '../../models/Homework';

@Component({
  selector: 'app-homework-detail',
  templateUrl: './homework-detail.component.html',
  styleUrls: ['./homework-detail.component.css']
})
export class HomeworkDetailComponent implements OnInit {
  pageTitle : string = 'Homework Detail';
  homework : Homework;

  constructor(private currentRoute: ActivatedRoute, private router : Router) {  }

  ngOnInit() {
    let id =+ this.currentRoute.snapshot.params['id'];
    // definimos el string con interpolacion 
    this.pageTitle +=  `: ${id}`;
  }

  onBack(): void {
    this.router.navigate(['/homeworks']); //En caso de que necesite parametros los paso como otros argumentos
  }
}