import { Component, OnInit } from '@angular/core';
import { HotelService } from './services/hotel.service';
import { Hotel } from './models/hotel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  private errorMessage;
  private hotelName : string;
  public hoteles: Hotel[];
  private stars: number;

  constructor(
    private _hotelService: HotelService
  ) {
  }

  ngOnInit() {
    this.search();
  }
  search(){
    this._hotelService.getHoteles().subscribe(
      result => {
        console.log("esta todo ok");
        console.log(result);
        this.hoteles = result.hoteles;

        if (!this.hoteles) {
          alert("Error en el server");
        }
      },
      error => {
        this.errorMessage = <any>error;

        if (this.errorMessage != null) {
          console.log("Error en la peticion");
          console.log(this.errorMessage);
        }
      }
    );
  }
  // getQueryParams(){
  //   return new HttpParams().set('hotelName' , this.hotelName).set('stars', this.stars);
  // }
  onHotelName(termino : string){
    this.hotelName = termino;
    this.search();
  }
  onStars(stars:number){
    this.stars = stars;
    this.search();
  }
}
