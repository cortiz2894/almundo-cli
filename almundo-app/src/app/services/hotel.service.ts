import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Hotel} from '../models/hotel';

@Injectable()
export class HotelService {
  public url: string;
  private imageUrl: string;

  constructor(private _http: Http) {
    this.url = 'http://localhost:3000/api/';
    this.imageUrl = 'http://localhost:3000/';
   }
  getApiUrl(segment = '') {
    var url = this.imageUrl + segment;
    return url;
  }
  getHoteles() {
    return this._http.get(this.url+'hoteles')
                    .map(res => res.json());
  }

}
