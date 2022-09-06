import { Component, OnInit } from '@angular/core';
import { TimerService } from './timer.service'

@Component({
  selector: 'app-brew',
  templateUrl: './brew.page.html',
  styleUrls: ['./brew.page.scss'],
})
export class BrewPage implements OnInit {

  currentTab = 'standard'
  hideHeader = false

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    this.timerService.cancelTimer$.subscribe(c => {
      this.hideHeader = !c
      console.log('hide?', c)
    })
    /* this.timerService.startTimer$.subscribe(s => {
      this.hideTab = s
    }) */
  }

  selectTimer(tab) {
    this.currentTab = tab;
  }
/*
  disableMaster() {
    this.disableTab = true
  } */

}
