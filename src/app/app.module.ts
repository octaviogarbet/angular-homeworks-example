import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeworksServiceService } from './homeworks-service.service';
import { HomeModule } from './home/home.module';
import { HomeworksModule } from './homeworks/homeworks.module';
import { environment } from '../environments/environment';
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    HomeworksModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HomeworksServiceService,
    { provide: 'ApiEndpoint', useValue: environment.apiEndpoint }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
