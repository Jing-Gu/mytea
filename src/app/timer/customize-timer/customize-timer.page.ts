import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tea } from '../components/models/tea.interface'
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-customize-timer',
  templateUrl: './customize-timer.page.html',
  styleUrls: ['./customize-timer.page.scss'],
})
export class CustomizeTimerPage implements OnInit, OnDestroy {

  timerIsOn: boolean;
  customizedTimeInSeconds: number;
  customizeTea = {
    name: 'customization',
    color: 'none',
    teaAmount: 0,
    waterAmount: 0,
    temperature: 0,
    brewTime: 0
  };

  cuztomizeTimerForm: NgForm;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    this.timerService.timerIsCompleted$.subscribe(comp => {
      console.log('completed full?', comp);
      if(comp) {
        this.timerIsOn = false;
        this.cuztomizeTimerForm.resetForm();
      }
    });
    console.log('from customized, timer is on?', this.timerIsOn);
  }

  setNewTimer(timerForm: NgForm) {
    this.timerIsOn = true;
    this.cuztomizeTimerForm = timerForm;
    this.customizedTimeInSeconds = timerForm.value.minutes * 60 + timerForm.value.seconds;
    console.log(timerForm.value);
  }

  resetTimer(timerForm: NgForm) {
    this.timerIsOn = false;
    this.timerService.timerIsCompletedSub.next(true);
    timerForm.resetForm();
    console.log('reset from cuz timer');
  }

  ngOnDestroy() {
    this.timerService.timerIsCompletedSub.complete();
  }

}
