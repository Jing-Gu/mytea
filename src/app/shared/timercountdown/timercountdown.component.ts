import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TimerService } from '../../timer/timer.service';
import { Tea } from '../../timer/components/models/tea.interface';
import { TeareadypopupComponent } from '../../timer/components/teareadypopup/teareadypopup.component';

@Component({
  selector: 'app-timercountdown',
  templateUrl: './timercountdown.component.html',
  styleUrls: ['./timercountdown.component.scss'],
})
export class TimercountdownComponent implements OnInit, OnChanges, OnDestroy {

  @Input() currentTea: Tea;
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
    }

    ngOnChanges() {
      // console.log('ngchange received: is timer on?', this.timerIsOn);

      if (this.currentTea.name !== 'customization') {
        this.checkDefaultBrewTime(this.currentTea.brewTime);
        if (this.timerIsOn) {
          this.timer(this.currentTea.brewTime);
        } else {
          this.resetTimer();
        }
      }

      if (this.currentTea.name === 'customization') {
        if(this.timerIsOn){
          this.timer(this.customizedTimer);
        } else {
          this.resetTimer();
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
        this.presentPopover();
        return;
      }
      this.displayTimeLeft(this.secondsLeft);
      console.log('left', this.secondsLeft, '%', this.gaugePercent);
    }, 1000);
    this.timerService.timerIsCompletedSub.next(false);
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
      translucent: true
    });
    await popover.present();
    popover.onDidDismiss().then(data => {
      this.resetTimer();
      this.timerService.timerIsCompletedSub.next(true);
      this.timerService.disableTabSub.next(false);
      if (this.currentTea.name === 'customization') {
        this.timerService.resetFormSub.next(true);
      }
    });
  }

  ngOnDestroy() {
    this.timerService.timerIsCompletedSub.complete();
    this.timerService.disableTabSub.complete();
    this.timerService.resetFormSub.complete();
  }

}
