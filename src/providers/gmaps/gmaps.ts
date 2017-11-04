import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GmapsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GmapsProvider {

  public url: string;
  public token: string;

  constructor(public http: Http) {
    this.url = 'https://maps.googleapis.com/maps/api/geocode/json';
    this.token = 'AIzaSyDRViV3SsYfHmGvH9j8xU0bkHeSs-zm9XM';
  }

  getAddressData(lat:number, lng:number){
    var params = "?latlng=" + lat + "," + lng + "&key=" + this.token;
    return this.http.get(this.url + params)
      .map(res => res.json());
  }

}
