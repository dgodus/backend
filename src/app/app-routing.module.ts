import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';
import { DefaultComponent } from './default/default.component';
import { NomNewComponent } from './nom-new/nom-new.component';
import { NomEditComponent } from './nom-edit/nom-edit.component';
import { NomDetailComponent } from './nom-detail/nom-detail.component';
import { PersonNewComponent} from './person-new/person-new.component';
import { VistaPersonaComponent } from './vista-persona/vista-persona.component';
import { AlumnoNewComponent} from './alumno-new/alumno-new.component';
import { ExperiencialaboralNewComponent } from './experiencialaboral-new/experiencialaboral-new.component'



const routes: Routes = [
    {path:'', component: DefaultComponent},
    {path:'Inicio', component: DefaultComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout/:sure', component: LoginComponent },
    {path: 'registro', component: RegisterComponent},
    {path: 'crear-nombre',component:NomNewComponent},
    {path: 'editar-nombre/:id', component:NomEditComponent},
    {path: 'nombre/:id',component:NomDetailComponent},
    {path: 'crear-persona',component:PersonNewComponent},
    {path: 'vista-persona', component: VistaPersonaComponent },
    {path: 'datos-alumno', component: AlumnoNewComponent},
    {path: 'Experiencia-laboral', component: ExperiencialaboralNewComponent  },

    {path: '**', component: DefaultComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutingProviders: any[] = [];
//export const routing:  ModuleWitthProviders = RouterModule.forRoot(appRoutes);
