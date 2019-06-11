import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageTitle: string = 'Homeworks Angular';
  name: string = "Octavio Garbarino";
  email: string = "mail@gmail.com";

  address = {
    street: "Una direccion",
    city: "Una ciudad",
    number: "1234"
  }
}
