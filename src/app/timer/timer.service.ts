import { Injectable } from '@angular/core';
import { AllTeas } from './components/models/allTea.model';
import { Tea } from './components/models/tea.interface';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  currentTea: Tea;

  constructor() { }

}
