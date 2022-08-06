import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { IncidentCreateComponent } from './incident/incident-create/incident-create.component';
import { HeaderComponent } from './header/header.component';
import {HomePageComponent} from './homePage/homePage.component';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FormBuilder, FormGroup} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IncidentCreateComponent,
    HeaderComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
