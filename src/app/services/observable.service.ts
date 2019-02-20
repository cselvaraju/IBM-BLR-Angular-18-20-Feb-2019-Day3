import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  data: Observable<any>;

  constructor() { }

  getData(): Observable<any> {
    this.data = new Observable<any>(
      (observer) => {
        setTimeout(() => {
          observer.next(10);
        }, 5000);

        setTimeout(() => {
          observer.next(20);
        }, 10000);

        setTimeout(() => {
          observer.next(30);
        }, 15000);

        setTimeout(() => {
          observer.next({country: 'India', capital: 'New Delhi'});
        }, 20000);
      }
    );
    return this.data;
  }
}
