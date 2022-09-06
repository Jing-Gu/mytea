import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TimerService } from '../../brew/timer.service';
import { TeareadypopupComponent } from '../../brew/components/teareadypopup/teareadypopup.component';

@Component({
  selector: 'app-timercountdown',
  templateUrl: './timercountdown.component.html',
  styleUrls: ['./timercountdown.component.scss'],
})
export class TimercountdownComponent implements OnInit, OnDestroy {

  @Input() currentTea;
  @Input() customizedTimer: number;
  @Input() timerIsOn: boolean;
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
      /* this.checkDefaultBrewTime(this.currentTea.brewTime);
      this.timerService.startTimer$.subscribe(on => {
        this.timerIsOn = on;
        if (on) {
          if (this.currentTea.label !== 'Customize') {
            this.calcTimer(this.currentTea.brewTime);
          }
          if (this.currentTea.label === 'Customize') {
            this.calcTimer(this.customizedTimer);
          }
        } else {
          this.resetTimer();
        }
      }) */
     /*  this.timerService.cancelTimer$.subscribe(c => {
        if (c) {
          this.resetTimer();
        }
      }) */
    }

    ngOnChanges() {
      console.log('check timer change', this.timerIsOn)
      this.checkDefaultBrewTime(this.currentTea.brewTime);
      if (this.timerIsOn) {
        if (this.currentTea.label !== 'Customize') {
          this.calcTimer(this.currentTea.brewTime);
        }
        if (this.currentTea.label === 'Customize') {
          this.calcTimer(this.customizedTimer);
        }
      } else {
        this.resetTimer();
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

  calcTimer(seconds) {
    clearInterval(this.countdown);
    const now = Date.now();
    const then = now + seconds * 1000;

    //this.displayTimeLeft(seconds);
    this.countdown = setInterval( () => {
      this.secondsLeft = Math.ceil((then - Date.now()) / 1000);
      this.gaugePercent = 100 - Math.ceil((this.secondsLeft / seconds) * 100);
      if (this.secondsLeft < 0) {
        //this.displayTimeLeft(0);
        clearInterval(this.countdown);
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
  }

  async presentPopover() {
    const popover = await this.popoverController.create({
      component: TeareadypopupComponent,
      cssClass: 'my-custom-class',
    });
    await popover.present();
    popover.onDidDismiss().then(data => {
      this.resetTimer();
      this.timerService.startTimer.next(false);
    });
  }

  ngOnDestroy() {
    this.timerService.startTimer.complete();
  }

}
