import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as teaBrewData from '../../../../data/teaBrewData.json'
import { TimerService } from '../../timer.service'

@Component({
  selector: 'app-tstandard',
  templateUrl: './tstandard.component.html',
  styleUrls: ['./tstandard.component.scss'],
})
export class TstandardComponent implements OnInit {

  allTeas = Array.from(teaBrewData)
  showAllTeas = true
  //@Output() disableMasterTab = new EventEmitter<boolean>()
  currentTea

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    /* this.timerService.startTimer$.subscribe(start => {
      this.showAllTeas = !start
    }) */
    this.timerService.cancelTimer$.subscribe(c => {
      this.showAllTeas = c
    })
  }

  goToTimer(tea) {
    //this.showAllTeas = false
    //this.disableMasterTab.emit(true)
    this.timerService.cancelTimer.next(false)
    //this.timerService.startTimer.next(true)
    this.currentTea = tea
  }

  /* goBack() {
    this.showAllTeas = true
    this.timerService.cancelTimer.next(false)
  } */

}
