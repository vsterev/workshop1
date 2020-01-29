import { HttpClient } from '@angular/common/http';
import { ICause } from './../shared/interfaces/cause';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  causes: ICause[];
  @Output() selectCause: EventEmitter <ICause> = new EventEmitter();
  // selectCause: EventEmitter<ICause> = new EventEmitter();
  // @Output() selectedCause3: ICause;

  constructor(public http: HttpClient) { }
  ngOnInit() {
    this.http.get<ICause[]>('http://localhost:3000/causes').subscribe(res => { this.causes = res; });
  }
  selectCauseHandler(cause: ICause) {
    this.selectCause.emit(cause);
    // this.causesService.selectedCause = cause;
    // console.log(this.selectCause);
  }
}
