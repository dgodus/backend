import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './components/login/login.component';

import { RegisterComponent} from './components/register/register.component';
import { DefaultComponent } from './default/default.component';
import { NomNewComponent } from './nom-new/nom-new.component';
import { NomEditComponent } from './nom-edit/nom-edit.component';
import { NomDetailComponent } from './nom-detail/nom-detail.component';
import { PersonNewComponent } from './person-new/person-new.component';
import { VistaPersonaComponent } from './vista-persona/vista-persona.component';
import { AlumnoNewComponent } from './alumno-new/alumno-new.component';
import { ExperiencialaboralNewComponent } from './experiencialaboral-new/experiencialaboral-new.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DefaultComponent,
    NomNewComponent,
    NomEditComponent,
    NomDetailComponent,
    PersonNewComponent,
    VistaPersonaComponent,
    AlumnoNewComponent,
    ExperiencialaboralNewComponent,
    //FormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
