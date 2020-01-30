import { ICause } from './shared/interfaces/cause';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  causes: ICause[];
  selectedCause: ICause;
  constructor(private http: HttpClient) { }
  loadCauses() {
    this.http.get<ICause[]>('http://localhost:3000/causes').subscribe(res => this.causes = res);
  }
  donate(amount: number) {
    return this.http.patch<ICause>(`http://localhost:3000/causes/${this.selectedCause.id}`, {
      collectedAmount: this.selectedCause.collectedAmount + amount });
    // .subscribe(() => this.loadCauses);
  }
}
