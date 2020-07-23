import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params} from '@angular/router';
import { UserService,  } from '../services/user.service';
import {  PersonaService} from '../services/persona.service';
import { Persona} from '../models/personas';

@Component({
  selector: 'app-person-new',
  templateUrl: './person-new.component.html',
  styleUrls: ['./person-new.component.css'],
  providers: [UserService,PersonaService]
})
export class PersonNewComponent implements OnInit {
  public page_title: string;
  public identity;
  public token;
  public personas: Persona;
  public status_personas : string;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _UserService: UserService,
    private _personaService: PersonaService


  ) {
    this.page_title = 'Datos Personales';
    this.identity = this._UserService.getIdentity();
    this.token= this._UserService.getToken();


   } 

  ngOnInit (){
    if(this.identity == null ){
      this._router.navigate(["/login"]);

    }else{
      //crear objeto usuariio
      this.personas = new Persona(1,'', '', '', '', '', null,null);
        

    }
    


  }
  onSubmit(form){
    this._personaService.create(this.token, this.personas).subscribe(
      response =>{
        //console.log(response);
        if(response.status == 'success'){
          this.personas = response.personas;
          this.status_personas = 'success';


          
          this._router.navigate(['/vista-persona']);

        } else{
          this.status_personas = 'error';

        }
       // this.car = response.car;

      },
      error => {
        console.log(<any>error);
        this.status_personas = 'error';
        
      }

    );
  }

}
