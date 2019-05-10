import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  buscarHotel(termino: string) {
    console.log(termino);
    this.filtrarHoteles(termino);
  }
  private filtrarHoteles(termino : string){
    
  }
}
