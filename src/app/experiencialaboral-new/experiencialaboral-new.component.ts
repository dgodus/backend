import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params} from '@angular/router';
import { UserService,  } from '../services/user.service';
import {  AlumnoService} from '../services/alumno.service';
import { Alumno} from '../models/alumnos';
import { Experiencia_laboralService} from '../services/experiencia_laboral.service';
import { Experiencia_laboral} from '../models/experiencia_laborals';


@Component({
  selector: 'app-experiencialaboral-new',
  templateUrl: './experiencialaboral-new.component.html',
  styleUrls: ['./experiencialaboral-new.component.css'],
  providers: [UserService,AlumnoService,Experiencia_laboralService]
})
export class ExperiencialaboralNewComponent implements OnInit {
  public page_title: string;
  public identity;
  public token;
  public experiencia_laborals: Experiencia_laboral;
  public status_experiencia_laborals : string;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _UserService: UserService,
    private _alumnoService: AlumnoService,
    private _experiencia_laboralService: Experiencia_laboralService,


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
      this.experiencia_laborals = new Experiencia_laboral(1,'','','','', '', null,null);
        

    }
    


  }
  onSubmit(form){
    this._experiencia_laboralService.create(this.token, this.experiencia_laborals).subscribe(
      response =>{
        //console.log(response);
        if(response.status == 'success'){
          this.experiencia_laborals = response.experiencia_laborals;
          this.status_experiencia_laborals = 'success';
          this._router.navigate(['/vista-persona']);

        } else{
          this.status_experiencia_laborals = 'error';

        }
       // this.car = response.car;

      },
      error => {
        console.log(<any>error);
        this.status_experiencia_laborals = 'error';
        
      }

    );
  }

}