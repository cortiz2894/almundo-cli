import { Component, OnInit, Input } from '@angular/core';

import {HotelService} from '../../services/hotel.service';
import {Hotel} from '../../models/hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css'],
  providers: []
})

export class HotelListComponent implements OnInit {
  public title : string;
  public errorMessage;
  public imageUrl: string;
  public amenities: string[];
  @Input() hoteles : Hotel[];

  constructor(
    private _hotelService : HotelService
  ){
    this.title = 'Listado de Hoteles';
  }

  ngOnInit() {
    this.imageUrl = this._hotelService.getApiUrl();
  }

  getStars(hotel: Hotel): any[] {
    return new Array(hotel.stars);
  }

}
