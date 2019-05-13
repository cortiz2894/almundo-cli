import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  @Output() stars = new EventEmitter <number>();
  @Output() hotelName = new EventEmitter <string>();
  constructor() { }

  ngOnInit() {
  }
  buscarHotel(termino: string) {
    this.hotelName.emit(termino);
  }
}
