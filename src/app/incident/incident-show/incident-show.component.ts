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
/*
  getFilteredIncidents() : any[] {

    return this.httpService.getAllIncident().pipe(map(element:any) => {

    })
    /*let inci: any = []
    this.httpService.getAllIncident().subscribe((resData:any) => {
      inci = resData.filter((element:any) => {
        if (this.curFilter === "active" && element.status !== "Closed") {
          
          return true;
        }
        else {
          return false;
        }
      });
      console.log(inci)
    })
    return inci;
  }*/

  ngOnInit() {
    //console.log(this.httpService.getAllIncident())
    //this.allIncidents = this.getAllIncidents();
    
    this.httpService.getAllIncident().subscribe((resData:any) => {
      this.allIncidents = resData.filter((element:any) => {
        if (this.curFilter === "active" && element.status !== "Closed") {
          return true;
        }
        else {
          return false;
        }
      })
      console.log(this.allIncidents);
    })
    
    
    //this.allIncidents = this.getFilteredIncidents();
  }

}