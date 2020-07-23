import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Route } from '@angular/compiler/src/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { NombService } from '../services/nomb.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-nom-detail',
  templateUrl: './nom-detail.component.html',
  styleUrls: ['./nom-detail.component.css'],
  providers : [UserService, NombService]
})
export class NomDetailComponent implements OnInit {
  public car: Car;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _nombService: NombService,
  ) {
    
   }

  ngOnInit() {
    this.getCar();
  }
  getCar(){
    this._route.params.subscribe(params =>{
      let id = +params['id']; 

      this._nombService.getCar(id).subscribe(
        response =>{
            if(response.status == 'success'){
              this.car = response.car;
            }else{
              this._router.navigate(['home']);
            }
        },
       error =>{
         console.log(<any>error);
       }
      );

    });

  }


}
