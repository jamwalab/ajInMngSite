import { Component, OnInit  } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import {AuthService} from '../utils/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginData = { email:'', password:'' };

  constructor(private httpService: HttpServiceService, private auth: AuthService) {}

  onLoginClick() {
    this.httpService.loginUser(this.loginData).subscribe((userData:any) => {
      const token = userData.token;
      this.auth.login(token);
    })
  }

  ngOnInit() {
  }

}