import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimerService } from '../../timer.service';
import { Tea } from '../models/tea.interface';
@Component({
  selector: 'app-brewtimer',
  templateUrl: './brewtimer.component.html',
  styleUrls: ['./brewtimer.component.scss'],
})
export class BrewtimerComponent implements OnInit {

  @Input() currentTea: Tea;
  timerIsOn = false;

  constructor(private router: Router,
    private timerService: TimerService) { }


  startTimer() {
    this.timerService.timerIsOn.next(true);
  }

  resetTimer() {
    this.timerService.timerIsOn.next(false);
  }

  ngOnInit() {
    this.timerService.timerIsOn$.subscribe(on => {
      this.timerIsOn = on;
    });
  }

  goToCustomize() {
    this.router.navigate(['/tabs/customize-timer']);
  }

}
