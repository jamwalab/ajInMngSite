import { Component, OnInit  } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { AuthService } from '../utils/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(private httpService: HttpServiceService, private auth: AuthService) {}

  ngOnInit() {
  }

}