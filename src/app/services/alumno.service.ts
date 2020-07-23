import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {GLOBAL} from './global';
import {Alumno} from '../models/alumnos';

@Injectable()

export class AlumnoService {
  public url: string;
    


    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }   
 pruebas(){
     return "hola mundo!!";
 }
  create(token, alumnos: Alumno): Observable<any>{
   let json = JSON.stringify(alumnos);
   let params ="json="+json;


   
   let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                  .set('Authorization', token) ;

       return this._http.post(this.url + 'alumno',params, {headers: headers});                           
 }
 getAlumnos(): Observable<any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
   return this._http.get(this.url + 'alumno', {headers: headers});

 }
 //getCars(): Observable<any>{
  // return this._http.get(this.url + 'cars', {headers: headers});
// }
getAlumno(persona_id): Observable<any>{
  return this._http.get(this.url + 'alumno/' + persona_id);
}

}