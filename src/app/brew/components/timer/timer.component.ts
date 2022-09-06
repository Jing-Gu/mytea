
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core'
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { TimerService } from '../../timer.service'

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit, OnDestroy {

  @Input() currentTea
  timerIsOn: boolean
  //@Output() backToMainPage = new EventEmitter<boolean>()
  customizedTimeInSeconds: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private timerService: TimerService) {}

  ngOnInit() {
    /* this.timerService.startTimer$.subscribe(on => {
      this.timerIsOn = on
    }) */
  }



  startTimer() {
    this.timerIsOn = true
    //this.timerService.startTimer.next(true);
  }

  resetTimer() {
    this.timerIsOn = false
    //this.timerService.startTimer.next(false);
  }

  cancelTimer() {
    //this.timerIsOn = false
    //this.backToMainPage.emit(true)
    this.timerService.cancelTimer.next(true)

    //this.timerService.startTimer.next(false);

  }

  setCustomTimer(timerForm: NgForm) {
    this.timerIsOn = true
    //this.timerService.startTimer.next(true);
    this.customizedTimeInSeconds = timerForm.value.minutes * 60 + timerForm.value.seconds;
  }

  resetCustomTimer(timerForm: NgForm) {
    this.timerIsOn = false
    //this.timerService.startTimer.next(false);
    timerForm.resetForm();
  }

  ngOnDestroy() {
    //this.timerService.startTimer.complete();
  }

}

