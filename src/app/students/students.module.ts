import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PageExampleComponent } from './page-example/page-example.component';
import { StudentsRoutingModule } from './students-routhing.module';
import { StudentsListComponent } from './students-list/students-list.component';

@NgModule({
  declarations: [
    PageExampleComponent,
    StudentsListComponent
  ],
  imports: [
    SharedModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
