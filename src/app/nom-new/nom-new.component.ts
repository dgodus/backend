import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params} from '@angular/router';
import { UserService,  } from '../services/user.service';
import {  NombService} from '../services/nomb.service';
import { Car} from '../models/car';
import { Route } from '@angular/compiler/src/core';
import { convertPropertyBinding } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-nom-new',
  templateUrl: './nom-new.component.html',
  styleUrls: ['./nom-new.component.css'],
  providers: [UserService,NombService]
})
export class NomNewComponent implements OnInit {
  public page_title: string;
  public identity;
  public token;
  public car: Car;
  public status_car : string;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _UserService: UserService,
    private _nombService: NombService


  ) {
    this.page_title = 'crear nuevo usuario';
    this.identity = this._UserService.getIdentity();
    this.token= this._UserService.getToken();


   } 

  ngOnInit (){
    if(this.identity == null ){
      this._router.navigate(["/login"]);

    }else{
      //crear objeto usuariio
      this.car = new Car(1,'', '', 1, '', null,null);
        

    }
    


  }
  onSubmit(form){
    this._nombService.create(this.token, this.car).subscribe(
      response =>{
        //console.log(response);
        if(response.status =='success'){
          this.car = response.car;
          this.status_car = 'success';
          this._router.navigate(['/home']);

        } else{
          this.status_car = 'error';

        }
       // this.car = response.car;

      },
      error => {
        console.log(<any>error);
        this.status_car = 'error';
        
      }

    );
  }

}

