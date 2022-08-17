import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { HttpServiceService } from './http-service.service';
import { AuthService } from './utils/auth';

import { IncidentCreateComponent } from './incident/incident-create/incident-create.component';
import { IncidentShowComponent } from './incident/incident-show/incident-show.component';
import { HeaderComponent } from './header/header.component';
import {HomePageComponent} from './homePage/homePage.component';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IncidentCreateComponent,
    IncidentShowComponent,
    HeaderComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    appRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [HttpServiceService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
