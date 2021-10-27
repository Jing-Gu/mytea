import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TimerService } from '../../timer.service';
import { Tea } from '../models/tea.interface';
import { TeareadypopupComponent } from '../teareadypopup/teareadypopup.component';

@Component({
  selector: 'app-timercountdown',
  templateUrl: './timercountdown.component.html',
  styleUrls: ['./timercountdown.component.scss'],
})
export class TimercountdownComponent implements OnInit, OnChanges {

  @Input() currentTea: Tea;
  @Input() customizedTimer: number;
  brewSeconds: number;
  brewMinutes: number;
  secondsLeft: number;
  brewingTimeDefault: string;
  brewingTime: string;

  countdown;
  gaugePercent = 0;

  constructor(
    public popoverController: PopoverController,
    private timerService: TimerService) { }


  ngOnInit() {
    this.timerService.timerIsOn$.subscribe(timerIsOn => {
      console.log('timer on?', timerIsOn);
      if (timerIsOn) {
        if (this.currentTea) {
          this.timer(this.currentTea.brewTime);
        }
        if (this.customizedTimer) {
          this.timer(this.customizedTimer);
        }
      } else {
        this.resetTimer();
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // receive time from predefined timer
    if (this.currentTea) {
      this.checkDefaultBrewTime(this.currentTea.brewTime);
      for(const property in changes) {
        if (property === 'currentTea') {
          const prevTea = changes[property].previousValue;
          const currTea = changes[property].currentValue;
          if(prevTea && prevTea !== currTea) {
            this.timerService.timerIsOn.next(false);
          }
        }
      }
    }
    // receive time from customized timer
    if (this.customizedTimer) {
      console.log('cus tm', this.customizedTimer);
      this.timer(this.customizedTimer);
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
    this.brewingTimeDefault = `
      ${this.brewMinutes < 1 ? '0' : ''}${this.brewMinutes}:${this.brewSeconds < 10 ? '0' : ''}${this.brewSeconds}`;
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
        if (this.secondsLeft < 0) {
          clearInterval(this.countdown);
          this.displayTimeLeft(0);
          console.log('complete');
          this.presentPopover();
          return;
        }
        this.displayTimeLeft(this.secondsLeft);
        console.log('left', this.secondsLeft, '%', this.gaugePercent);
      }, 1000);
  }

  resetTimer() {
    clearInterval(this.countdown);
    this.gaugePercent = 0;
    this.brewingTime = this.brewingTimeDefault;
    console.log('reset');
  }

  async presentPopover() {
    const popover = await this.popoverController.create({
      component: TeareadypopupComponent,
      cssClass: 'my-custom-class',
      translucent: true
    });
    await popover.present();
    await popover.onDidDismiss();
  }


}
