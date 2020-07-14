import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService}  from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck{
  public identity;
  public token;


  title = 'FrontendEgresados';
  constructor(
    private _userService: UserService
  ){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

  }
  ngOnInit(){
    console.log('app.component cargado');
  }
  //es el encargado de actualizar el formulario por eso es necesario
  ngDoCheck(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

  }
}
