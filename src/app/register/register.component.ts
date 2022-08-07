import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData = { email:'', username: '', password:'' };

  onRegisterClick() {
    console.log(this.registerData);
  }

  ngOnInit() {
  }
}