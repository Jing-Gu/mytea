import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AllTeas } from './components/models/allTea.model';
import { Tea } from './components/models/tea.interface';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  currentTea: Tea;

  timerIsCompletedSub = new Subject<boolean>();
  timerIsCompleted$ = this.timerIsCompletedSub.asObservable();

  disableTabSub = new Subject<boolean>();
  disableTab$ = this.disableTabSub.asObservable();

  resetFormSub =  new Subject<boolean>();
  resetForm$ = this.resetFormSub.asObservable();

  constructor() { }


}
