import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeworkListComponent } from './homework-list/homework-list.component';
import { PageExampleComponent } from './page-example/page-example.component';
import { HomeworksFilterPipe } from './homeworks-filter.pipe';
import { HomeworksServiceService } from './homeworks-service.service';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeworkListComponent,
    PageExampleComponent,
    HomeworksFilterPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    HomeworksServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
