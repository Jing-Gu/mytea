import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TimerService {

  startTimer = new Subject<boolean>();
  startTimer$ = this.startTimer.asObservable();



  cancelTimer = new BehaviorSubject<boolean>(true);
  cancelTimer$ = this.cancelTimer.asObservable();

  //currentTimer = new

  constructor() { }

}
