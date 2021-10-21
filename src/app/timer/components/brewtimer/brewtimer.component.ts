import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Tea } from '../models/tea.interface';

@Component({
  selector: 'app-brewtimer',
  templateUrl: './brewtimer.component.html',
  styleUrls: ['./brewtimer.component.scss'],
})
export class BrewtimerComponent implements OnInit, OnChanges {

  @Input() currentTea: Tea;
  prevTea: Tea;
  CurrTea: Tea;
  brewSeconds: number;
  brewMinutes: number;
  secondsLeft: number;
  brewingTimeDefault: string;
  brewingTime: string;

  countdown;
  gaugePercent = 0;
  timerIsOn = false;
  timerIsCompleted = false;

  constructor() { }

  ngOnInit() {
    //this.tab = this.currentTab;
    //console.log(this.tab, this.currentTab);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.checkDefaultBrewTime(this.currentTea.brewTime);
    for(let property in changes) {
      if (property === 'currentTea') {
        this.prevTea = changes[property].previousValue;
        this.CurrTea = changes[property].currentValue;
        if(this.prevTea && this.prevTea != this.CurrTea) {
          this.resetTimer();
        }
      }

    }
  }

  checkDefaultBrewTime(brewSecondsDefault) {
    if (brewSecondsDefault < 60) {
      this.brewMinutes = 0;
      this.brewSeconds = brewSecondsDefault;
    } else {
      this.brewMinutes = Math.floor(brewSecondsDefault/60);
      this.brewSeconds = brewSecondsDefault % 60;
    }
    this.brewingTimeDefault = `${this.brewMinutes < 1 ? '0' : ''}${this.brewMinutes}:${this.brewSeconds < 10 ? '0' : ''}${this.brewSeconds}`;
    this.brewingTime = this.brewingTimeDefault;
  }

  displayTimeLeft(seconds) {
    this.brewMinutes = Math.floor(seconds / 60);
    this.brewSeconds = seconds % 60;
    this.brewingTime = `${this.brewMinutes < 1 ? '0' : ''}${this.brewMinutes}:${this.brewSeconds < 10 ? '0' : ''}${this.brewSeconds}`;
  }

  timer(seconds) {
    clearInterval(this.countdown);
      const now = Date.now();
      const then = now + seconds * 1000;

      this.displayTimeLeft(seconds);
      this.countdown = setInterval( () => {
        this.secondsLeft = Math.round((then - Date.now()) / 1000);
        this.gaugePercent = 100 - Math.ceil((this.secondsLeft / seconds) * 100);
        console.log('left', this.secondsLeft, '%', this.gaugePercent);
        if (this.secondsLeft < 0) {
          clearInterval(this.countdown);
          this.displayTimeLeft(0);
          console.log('complete'); //make a snack bar
          this.timerIsCompleted = true;
          return
        }
        this.displayTimeLeft(this.secondsLeft);
      }, 1000);
  }

  startTimer(teaBrewSeconds) {
    this.timerIsOn = true;
    this.timer(teaBrewSeconds);
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
