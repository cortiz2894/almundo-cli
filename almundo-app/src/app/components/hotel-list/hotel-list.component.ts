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
  public hoteles : Array<string>;
  public errorMessage;

  constructor(
    private _hotelService : HotelService
  ){
    this.title = 'Listado de Hoteles';
    this.hoteles = ['hotel' , 'hotel 2' , 'hotel 3'];
  }

  ngOnInit() {
    this._hotelService.getHoteles().subscribe(
      result => {
        console.log(result);
      },
      error => {
        this.errorMessage = <any>error;

        if(this.errorMessage != null) {
          console.log(this.errorMessage);
        }
      }
    );
  }

}
