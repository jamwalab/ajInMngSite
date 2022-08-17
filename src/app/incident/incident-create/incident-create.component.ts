import { Component, OnInit  } from '@angular/core';
import { HttpServiceService } from '../../http-service.service';
import { AuthService } from '../../utils/auth';

@Component({
  selector: 'app-create-incident',
  templateUrl: './incident-create.component.html',
  styleUrls: ['./incident-create.component.css']
})

export class IncidentCreateComponent implements OnInit {

  constructor(private httpService: HttpServiceService, private auth: AuthService) {}

  onCloseClick() {
    const modalWrapper = document.getElementById("jw-modal-wrapper");
    if (modalWrapper !== null) {
      modalWrapper.classList.remove("jw-modal-wrapper-open")
      modalWrapper.classList.add("jw-modal-wrapper-close")
    }
  }
  ngOnInit() {
  }

}