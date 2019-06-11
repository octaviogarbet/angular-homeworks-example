import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageExampleComponent } from './page-example/page-example.component';
import { StudentsListComponent } from './students-list/students-list.component';

const routes: Routes = [
    {
      path: '',
      component: StudentsListComponent
    }, {
        path: 'example',
        component: PageExampleComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class StudentsRoutingModule { }