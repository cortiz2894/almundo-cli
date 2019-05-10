import { Component, OnInit } from '@angular/core';

import {HotelService} from '../../services/hotel.service';
import {Hotel} from '../../models/hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css'],
  providers: [HotelService]
})

export class HotelListComponent implements OnInit {
  public title : string;
  public errorMessage;
  public hoteles : Hotel[];
  public api_url : string;

  constructor(
    private _hotelService : HotelService
  ){
    this.title = 'Listado de Hoteles';
  }

  ngOnInit() {
    this.api_url = this._hotelService.getApiUrl();
    alert(this.api_url);
    this._hotelService.getHoteles().subscribe(
      result => {
        console.log("esta todo ok");
        console.log(result);
        this.hoteles = result.hoteles;

        if(!this.hoteles){
          alert("Error en el server");
        }
      },
      error => {
        this.errorMessage = <any>error;

        if(this.errorMessage != null) {
          console.log("Error en la peticion");
          console.log(this.errorMessage);
        }
      }
    );
  }

}
