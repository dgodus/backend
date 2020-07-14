import{ Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService}  from '../../services/user.service';
//import {UserService} from '../../services/'
//import { from } from 'rxjs';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers : [UserService]
})
export class LoginComponent implements OnInit{
    public title: string;
    public user: User;
    public token;
    public identity;
    public status: string;


    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService:UserService
    ){
        this.title = 'Identificate';
        this.user = new User(1, 'ROLE_USER', '', '', '', '');


    }
    ngOnInit(){
        console.log('Login.component cargado correctamente!!');
        this.logout();


    }

    onSubmit(form){
        console.log(this.user);
        this._userService.signup(this.user).subscribe(
            response=>{
                //nos devule el token
                if(response.status != 'error'){
                    this.status = 'success';
                    this.token = response;
               localStorage.setItem('token', this.token);


                //objeto user
                this._userService.signup(this.user, true).subscribe(
                    response=>{
                        
                        this.identity = response;
                        localStorage.setItem('identity', JSON.stringify(this.identity));

                        //para redirecionar a una pagina
                        this._router.navigate(['home']);

        
                    
        
        
                    },
                    error=> {
                        console.log(<any>error); 
                    }
                );
            }else{
                this.status = 'error';
            }


            },
            error=> {
                console.log(<any>error); 
            }
        );


    }
    logout(){
        this._route.params.subscribe(params =>{
            let logout = +params['sure'];


            if(logout ==1){
                localStorage.removeItem('identity');
                localStorage.removeItem('token');

                this.identity = null;
                this.token = null;
                // mandamos a otro componnente
                this._router.navigate(['home'])


            }
        });
    }

}