import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {GLOBAL} from './global';
import {Experiencia_laboral} from '../models/experiencia_laborals';

@Injectable()

export class Experiencia_laboralService {
  public url: string;
    


    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }   
 pruebas(){
     return "hola mundo!!";
 }
  create(token, experiencia_laborals: Experiencia_laboral): Observable<any>{
   let json = JSON.stringify(experiencia_laborals);
   let params ="json="+json;


   
   let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                  .set('Authorization', token) ;

       return this._http.post(this.url + 'experiencia_laboral',params, {headers: headers});                           
 }
 getExperiencia_laborals(): Observable<any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
   return this._http.get(this.url + 'experiencia_laboral', {headers: headers});

 }
 //getCars(): Observable<any>{
  // return this._http.get(this.url + 'cars', {headers: headers});
// }
getAlumno(persona_id): Observable<any>{
  return this._http.get(this.url + 'experiencia_laboral/' + persona_id);
}

}