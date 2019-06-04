import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;

  ngOnChanges():void {
      //86 es el width de nuestras estrellitas (ver el template)
      //como estamos implementando el OnChanges, cada vez que el valor de 'rating' cambie
      //esto se va a refrescar
      this.starWidth = this.rating * 86/5; 
  }

  onClick(): void {
    this.ratingClicked.emit(`El raiting es ${this.rating}!`);
  }

}
