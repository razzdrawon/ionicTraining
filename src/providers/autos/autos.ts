import { Auto } from './../../models/auto';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the AutosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AutosProvider {

  public url: string
  constructor(private http:Http) {
    this.url = 'http://localhost:7070/api';
   }

   getAutos() {
     return this.http.get(this.url + '/autos')
            .map(res => res.json());
   }

   postAuto(auto:Auto){
    let params = JSON.stringify(auto)
    let headers = new Headers()
    headers.append(
      'Content-type','application/json'
    );
    
    return this.http.post(
      this.url + '/auto',
      params,
      {headers:headers}
    ).map(res=>res.json().data)
  }

  deleteAuto(idAuto:any){
    return this.http.delete(
      this.url + '/auto'
    ).map(res=>res.json().data)
  }

}
