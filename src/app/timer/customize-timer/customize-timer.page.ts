import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-customize-timer',
  templateUrl: './customize-timer.page.html',
  styleUrls: ['./customize-timer.page.scss'],
})
export class CustomizeTimerPage implements OnInit {

  timerIsOn: boolean;
  customizedTimeInSeconds: number;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    this.timerService.timerIsOn$.subscribe(on => {
      this.timerIsOn = on;
    });
  }

  setNewTimer(timerForm: NgForm) {
    this.timerService.timerIsOn.next(true);
    this.customizedTimeInSeconds = timerForm.value.minutes * 60 + timerForm.value.seconds;
  }

  resetTimer(timerForm: NgForm) {
    this.timerService.timerIsOn.next(false);
    timerForm.resetForm();
    console.log('reset');
  }

}
