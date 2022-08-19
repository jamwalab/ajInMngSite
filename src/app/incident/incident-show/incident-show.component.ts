import { Component, OnInit  } from '@angular/core';
import { filter, map } from 'rxjs';
import { HttpServiceService } from '../../http-service.service';
import { AuthService } from '../../utils/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-incident',
  templateUrl: './incident-show.component.html',
  styleUrls: ['./incident-show.component.css']
})

export class IncidentShowComponent implements OnInit {

  constructor(private httpService: HttpServiceService, private auth: AuthService, private route: ActivatedRoute, private router: Router) {}

  onOpenClick() {
    const modalWrapper = document.getElementById("jw-modal-wrapper");
    if (modalWrapper !== null) {
      modalWrapper.classList.add("jw-modal-wrapper-open")
      modalWrapper.classList.remove("jw-modal-wrapper-close")
    }
  }

  allIncidents: any = [];

  curFilter: string = "active"

  curUser: any;

  checkStatus(date:any) {
    console.log(date);
    return Date.now() - Date.parse(date) < 10 * 60 * 60 * 1000;
  }

  ngOnInit() {
   
    this.httpService.getAllIncident().subscribe((resData:any) => {
      this.allIncidents = resData.filter((element:any) => {
        if (this.curFilter === "active" && element.status !== "Closed") {
          return true;
        }
        else {
          return false;
        }
      }).sort((a:any,b:any) => {
        return Date.parse(b.createdOn) - Date.parse(a.createdOn);
      })

      this.curUser = this.auth.getProfile();
      console.log(this.allIncidents);
    })
    
  }

}