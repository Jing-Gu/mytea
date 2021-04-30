import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: 'timer.page.html',
  styleUrls: ['timer.page.scss']
})
export class TimerPage {

  constructor() {}

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
