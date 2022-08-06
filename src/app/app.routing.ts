import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from './homePage/homePage.component';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

export const appRoutingModule = RouterModule.forRoot(routes);