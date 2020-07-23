import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {GLOBAL} from './global';
import {Persona} from '../models/personas';

@Injectable()

export class PersonaService {
  public url: string;
    


    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }   
 pruebas(){
     return "hola mundo!!";
 }
  create(token, personas: Persona): Observable<any>{
   let json = JSON.stringify(personas);
   let params ="json="+json;


   
   let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                  .set('Authorization', token) ;

       return this._http.post(this.url + 'persona',params, {headers: headers});                           
 }
 getPersonas(): Observable<any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
   return this._http.get(this.url + 'persona', {headers: headers});

 }
 //getCars(): Observable<any>{
  // return this._http.get(this.url + 'cars', {headers: headers});
// }
getPersona(persona_id): Observable<any>{
  return this._http.get(this.url + 'persona/' + persona_id);
}

}