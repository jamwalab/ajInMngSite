import { Component, OnInit  } from '@angular/core';
import { HttpServiceService } from '../../http-service.service';
import { AuthService } from '../../utils/auth';

@Component({
  selector: 'app-create-incident',
  templateUrl: './incident-create.component.html',
  styleUrls: ['./incident-create.component.css']
})

export class IncidentCreateComponent implements OnInit {

  incidentData = {description: '', createdBy: '', status: '', priority: '', userId: ''}

  constructor(private httpService: HttpServiceService, private auth: AuthService) {}

  onCloseClick() {
    const modalWrapper = document.getElementById("jw-modal-wrapper");
    if (modalWrapper !== null) {
      modalWrapper.classList.remove("jw-modal-wrapper-open")
      modalWrapper.classList.add("jw-modal-wrapper-close")
    }
  }

  onSubmitIncident() {
    const userData:any = this.auth.getProfile();
    //console.log(this.auth.getProfile());

    this.incidentData.createdBy = userData.username;
    this.incidentData.status = "New";
    this.incidentData.userId = userData._id;
    //this.httpService.createIncident(this.incidentData);

    this.httpService.createIncident(this.incidentData).subscribe((resData:any) => {
      console.log(resData);
      this.onCloseClick();
    })
    location.reload();
  }

  allPriorities: string[] = ['Low', 'Medium', 'High'];

  changePriority(value:any) {
    this.incidentData.priority = value;
  }

  ngOnInit() {

  }

}