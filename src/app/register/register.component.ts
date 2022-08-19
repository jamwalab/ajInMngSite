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
    this.httpService.registerUser(this.registerData).subscribe((userData:any) => {
      const token = userData.token;
      this.auth.login(token);
    })
  }

  ngOnInit() {
  }
}