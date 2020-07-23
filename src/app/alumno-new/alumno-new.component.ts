import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params} from '@angular/router';
import { UserService,  } from '../services/user.service';
import {  AlumnoService} from '../services/alumno.service';
import { Alumno} from '../models/alumnos';

@Component({
  selector: 'app-alumno-new',
  templateUrl: './alumno-new.component.html',
  styleUrls: ['./alumno-new.component.css'],
  providers: [UserService,AlumnoService]
})
export class AlumnoNewComponent implements OnInit {
  public page_title: string;
  public identity;
  public token;
  public alumnos: Alumno;
  public status_alumnos : string;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _UserService: UserService,
    private _alumnoService: AlumnoService


  ) {
    this.page_title = 'Datos Alumno';
    this.identity = this._UserService.getIdentity();
    this.token= this._UserService.getToken();


   } 

  ngOnInit (){
    if(this.identity == null ){
      this._router.navigate(["/login"]);

    }else{
      //crear objeto usuariio
      this.alumnos = new Alumno(1,'', '', null,null);
        

    }
    


  }
  onSubmit(form){
    this._alumnoService.create(this.token, this.alumnos).subscribe(
      response =>{
        //console.log(response);
        if(response.status == 'success'){
          this.alumnos = response.alumnos;
          this.status_alumnos = 'success';
          this._router.navigate(['/vista-persona']);

        } else{
          this.status_alumnos = 'error';

        }
       // this.car = response.car;

      },
      error => {
        console.log(<any>error);
        this.status_alumnos = 'error';
        
      }

    );
  }

}
