import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Route } from '@angular/compiler/src/core';
import { UserService } from '../services/user.service';
import { Car } from '../models/car';
import { NombService } from '../services/nomb.service';

//import { User} from '../../models/User';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  providers : [UserService, NombService]
})
export class DefaultComponent implements OnInit {
  public title: string;
  public cars: Array<Car>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _nombService: NombService,
  ) {
    this.title = 'Inicio';
   }

  ngOnInit() {
    console.log('defaul.component cargado correctamente');
    this._nombService.getCar().subscribe(
      response =>{
        if(response.status =='success'){
          this.cars = response.cars;

        }

        //console.log(response);

      },
      error =>{
        console.log(error);
      }

    );

  }

}
