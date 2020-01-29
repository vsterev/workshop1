import { ICause } from './shared/interfaces/cause';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedCause: ICause;
  selectCauseHandler(cause: ICause) {
    this.selectedCause = cause;
    console.log(`App.component SelectedCauseName ${this.selectedCause.cause}`);
  }
}
