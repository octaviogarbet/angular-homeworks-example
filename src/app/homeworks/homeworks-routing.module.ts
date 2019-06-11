import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeworkListComponent } from './homework-list/homework-list.component';
import { HomeworkDetailComponent } from './homework-detail/homework-detail.component';
import { HomeworkDetailGuard } from './homework-detail.guard';
 
 
const homeworkRoutes: Routes = [
  { path: 'homeworks',  component: HomeworkListComponent },
  { 
    path: 'homework/:id',
    component: HomeworkDetailComponent,
    canActivate: [HomeworkDetailGuard]
 }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(homeworkRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeworksRoutingModule { }