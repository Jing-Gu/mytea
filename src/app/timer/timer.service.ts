import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AllTeas } from './components/models/allTea.model';
import { Tea } from './components/models/tea.interface';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  currentTea: Tea;
  timerIsOn = new BehaviorSubject<boolean>(false);
  timerIsOn$ = this.timerIsOn.asObservable();

  constructor() { }

  switchTimer(onOffValue: boolean) {
    this.timerIsOn.next(onOffValue);
  }

}
