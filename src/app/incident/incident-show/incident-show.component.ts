import { Component, OnInit  } from '@angular/core';
import { HttpServiceService } from '../../http-service.service';
import { AuthService } from '../../utils/auth';

@Component({
  selector: 'app-show-incident',
  templateUrl: './incident-show.component.html',
  styleUrls: ['./incident-show.component.css']
})

export class IncidentShowComponent implements OnInit {

  constructor(private httpService: HttpServiceService, private auth: AuthService) {}

  onOpenClick() {
    const modalWrapper = document.getElementById("jw-modal-wrapper");
    if (modalWrapper !== null) {
      modalWrapper.classList.add("jw-modal-wrapper-open")
      modalWrapper.classList.remove("jw-modal-wrapper-close")
    }
  }

  /*
  onCloseClick() {
    const modalWrapper = document.getElementById("jw-modal-wrapper");
    if (modalWrapper !== null) {
      modalWrapper.classList.remove("jw-modal-wrapper-open")
      modalWrapper.classList.add("jw-modal-wrapper-close")
    }
  }
  */
  ngOnInit() {
  }

}