import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {GLOBAL} from './global';
import {Car} from '../models/car';

@Injectable()

export class NombService {
  public url: string;
    


    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }
 pruebas(){
     return "hola mundo!!";
 }
  create(token, car: Car): Observable<any>{
   let json = JSON.stringify(car);
   let params ="json="+json;


   
   let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                  ;

       return this._http.post(this.url + 'cars',params, {headers: headers});                           
 }
 getCar(): Observable<any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
   return this._http.get(this.url + 'cars', {headers: headers});

 }

}
