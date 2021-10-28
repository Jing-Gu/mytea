import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
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
  }

  resetTimer() {
    this.timerIsOn = false;
    this.timerService.timerIsCompletedSub.next(true);
  }


  ngOnInit() {
    console.log('from brewtimer, timer is on?', this.timerIsOn);

    this.timerService.timerIsCompleted$.subscribe(comp => {
      console.log('completed full?', comp);
      if(comp) {
        this.timerIsOn = false;
      }
    });
  }

  goToCustomize() {
    //this.currentTea = this.allTeas.customizeTea;
    this.router.navigate(['/tabs/timer/customize-timer'], { queryParams: { page: 1 } });
  }

  ngOnDestroy() {
    this.timerService.timerIsCompletedSub.complete();
  }

}
