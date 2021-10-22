import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customize-timer',
  templateUrl: './customize-timer.page.html',
  styleUrls: ['./customize-timer.page.scss'],
})
export class CustomizeTimerPage implements OnInit {

  brewSeconds: number;
  brewMinutes: number;
  secondsLeft: number;
  brewingTimeDefault: string;
  brewingTime: string;

  customizedTimeInSeconds: number;

  countdown;
  gaugePercent = 0;
  timerIsOn = false;
  timerIsCompleted = false;


  constructor() { }

  ngOnInit() {
  }

  timer(seconds) {
    clearInterval(this.countdown);
      const now = Date.now();
      const then = now + seconds * 1000;

      this.displayTimeLeft(seconds);
      this.countdown = setInterval( () => {
        this.secondsLeft = Math.round((then - Date.now()) / 1000);
        this.gaugePercent = 100 - Math.ceil((this.secondsLeft / seconds) * 100);
        if (this.secondsLeft < 0) {
          clearInterval(this.countdown);
          this.displayTimeLeft(0);
          console.log('complete'); //make a snack bar
          this.timerIsCompleted = true;
          return;
        }
        this.displayTimeLeft(this.secondsLeft);
        console.log('left', this.secondsLeft, '%', this.gaugePercent);
      }, 1000);
  }

  displayTimeLeft(seconds) {
    this.brewMinutes = Math.floor(seconds / 60);
    this.brewSeconds = seconds % 60;
    this.brewingTime = `${this.brewMinutes < 1 ? '0' : ''}${this.brewMinutes}:${this.brewSeconds < 10 ? '0' : ''}${this.brewSeconds}`;
  }

  setNewTimer(timerForm: NgForm) {
    console.log(timerForm.value);
    this.timerIsOn = true;
    this.customizedTimeInSeconds = timerForm.value.minutes * 60 + timerForm.value.seconds;
    this.timer(this.customizedTimeInSeconds);
  }

  resetTimer() {
    clearInterval(this.countdown);
    this.timerIsOn = false;
    this.timerIsCompleted = false;
    this.gaugePercent = 0;
    this.brewingTime = this.brewingTimeDefault;
    console.log('reset');
  }

}
