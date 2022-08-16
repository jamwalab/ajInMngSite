import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  uri = 'http://localhost:3001/api';

  constructor(private http: HttpClient) { }
  

  registerUser(newUser: any) {
    return this.http.post(`${this.uri}/user/register`, newUser);
  }

  loginUser(userData: any) {
    return this.http.post(`${this.uri}/user/login`, userData);
  }

}
