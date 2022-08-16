import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import {AuthService} from '../utils/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private httpService: HttpServiceService, private auth: AuthService) {}

  onLogoutClick() {
    //console.log(this.loginData);
    this.auth.logout();
  }

  isLoogedIn() {
    return this.auth.loggedIn()
  }
}