import { ICause } from './../shared/interfaces/cause';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
@Input() selectedCause2: ICause[];

  constructor() { }

  ngOnInit() {
    console.log(`right Selected Cause is ${this.selectedCause2}`);
  }

}
