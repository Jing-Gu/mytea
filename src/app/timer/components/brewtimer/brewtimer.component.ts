import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimerService } from '../../timer.service';
import { Tea } from '../models/tea.interface';
@Component({
  selector: 'app-brewtimer',
  templateUrl: './brewtimer.component.html',
  styleUrls: ['./brewtimer.component.scss'],
})
export class BrewtimerComponent implements OnInit, OnDestroy {

  @Input() currentTea: Tea;
  timerIsOn: boolean;

  constructor(private router: Router,
    private timerService: TimerService) { }


  startTimer() {
    this.timerIsOn = true;
    this.timerService.disableTabSub.next(true);
  }

  resetTimer() {
    this.timerIsOn = false;
    this.timerService.disableTabSub.next(false);
    this.timerService.timerIsCompletedSub.next(true);
  }

  ngOnInit() {
    this.timerService.timerIsCompleted$.subscribe(comp => {
      if(comp) {
        this.timerIsOn = false;
      }
    });
  }

  goToCustomize() {
    this.router.navigate(['/tabs/timer/customize-timer'], { queryParams: { page: 1 } });
  }

  ngOnDestroy() {
    this.timerService.timerIsCompletedSub.complete();
    this.timerService.disableTabSub.complete();
  }

}
