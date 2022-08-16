import { Component, OnInit  } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import {AuthService} from '../utils/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData = { email:'', username: '', password:'' };

  constructor(private httpService: HttpServiceService, private auth: AuthService) {}

  onRegisterClick() {
    //console.log(this.registerData);
    this.httpService.registerUser(this.registerData).subscribe((userData:any) => {
      //console.log(userData);
      const token = userData.token;
      this.auth.login(token);
    })
  }

  ngOnInit() {
  }
}