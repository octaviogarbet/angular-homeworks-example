import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    FormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
