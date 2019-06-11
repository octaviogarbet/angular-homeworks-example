import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeworkListComponent } from './homework-list/homework-list.component';
import { HomeworksFilterPipe } from '../homeworks-filter.pipe';
import { SharedModule } from '../shared/shared.module';
import { HomeworkDetailComponent } from './homework-detail/homework-detail.component';
import { HomeworkDetailGuard } from './homework-detail.guard';
import { HomeworksRoutingModule } from './homeworks-routing.module';

@NgModule({
  declarations: [
    HomeworkListComponent,
    HomeworksFilterPipe,
    HomeworkDetailComponent
  ],
  imports: [
    SharedModule,
    HomeworksRoutingModule
  ],
  exports: [
  ],
  providers: [
    HomeworkDetailGuard
  ]
})
export class HomeworksModule { }
