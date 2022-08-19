import { Component, OnInit  } from '@angular/core';
import { HttpServiceService } from '../../http-service.service';
import { AuthService } from '../../utils/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-each-incident',
  templateUrl: './incident-each.component.html',
  styleUrls: ['./incident-each.component.css']
})

export class IncidentEachComponent implements OnInit {

  commentData = {incidentId: "", commentText: ""}
  constructor(private httpService: HttpServiceService, private auth: AuthService, private route: ActivatedRoute, private router: Router) {}

  oneIncident:any;

  onSubmitComment() {
    this.commentData.incidentId = this.oneIncident._id
    //console.log(this.commentData);
    this.httpService.addComment(this.commentData).subscribe((resData:any) => {
      console.log(resData);
    })
    this.commentData.commentText = "";
    location.reload();
  }

  ngOnInit() {
    let inciId: any;
    this.route.params
      .subscribe(params => {
        console.log(params);
        inciId = params['incidentId'];
      }
    );

    this.httpService.getOneIncident(inciId).subscribe((resData:any) => {
      this.oneIncident = resData;
      console.log( this.oneIncident);
    })
  }

}