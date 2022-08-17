import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from './homePage/homePage.component';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {IncidentShowComponent} from './incident/incident-show/incident-show.component';
import {IncidentCreateComponent} from './incident/incident-create/incident-create.component';
import { AuthService } from './utils/auth';



const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: (() => {
    const auth = new AuthService;
    return auth.loggedIn() ? DashboardComponent : LoginComponent;
  })() },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: (() => {
    const auth = new AuthService;
    return auth.loggedIn() ? DashboardComponent : LoginComponent;
  })() },
  { path: 'incident', component: (() => {
    const auth = new AuthService;
    return auth.loggedIn() ? IncidentShowComponent : LoginComponent;
  })() }
];

export const appRoutingModule = RouterModule.forRoot(routes);