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

  createIncident(incidentData:any) {
    return this.http.post(`${this.uri}/incident`, incidentData);
  }

  getAllIncident() {
    return this.http.get(`${this.uri}/incident`);
  }

  getOneIncident(incidentId:any) {
    return this.http.get(`${this.uri}/incident/${incidentId}`);
  }

  addComment(commentData:any) {
    return this.http.post(`${this.uri}/incident/addComment`, commentData);
  }
}
