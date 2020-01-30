import { ServiceService } from '../service.service';
import { ICause } from './../shared/interfaces/cause';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef<HTMLInputElement>;
  get selectedCause() {
    return this.serviseServise.selectedCause;
  }
  get color() {
    if (this.selectedCause.collectedAmount >= this.selectedCause.neededAmount) {
      return 'green';
    } else {
      if (
        this.selectedCause.collectedAmount < 2 * (this.selectedCause.neededAmount / 3) &&
        this.selectedCause.collectedAmount > this.selectedCause.neededAmount / 3
      ) {
        return 'yellow';
      }
      return 'red';
    }
  }
  makeDonatationHandler() {
    console.log(this.amountInput.nativeElement.value);
    this.serviseServise.donate(+this.amountInput.nativeElement.value).subscribe(() => {
      this.serviseServise.loadCauses();
      this.amountInput.nativeElement.value = '';
    });
  }
  constructor(private serviseServise: ServiceService) { }

  ngOnInit() {
  }

}
