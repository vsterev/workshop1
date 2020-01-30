import { ServiceService } from './../service.service';
import { ICause } from './../shared/interfaces/cause';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  get causes() {
    return this.serviceService.causes;

  }
  constructor(private serviceService: ServiceService) {
  }

  ngOnInit() {
    this.serviceService.loadCauses();

  }
  selectCauseHandler(cause: ICause) {
    this.serviceService.selectedCause = cause;
  }
}
