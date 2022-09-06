import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { TimerService } from '../brew/timer.service'
import { Subject } from 'rxjs'
import { switchMap, takeUntil, tap } from 'rxjs/operators'

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, OnDestroy {

  timerOn: boolean
  disableBrewTab = false
  unsubscribe$: Subject<boolean> = new Subject<boolean>()

  constructor(
    private route: ActivatedRoute,
    private timerService: TimerService) {
  /*     this.timerService.startTimer$.pipe(
        tap(t => {

          this.timerOn = t
        }),
        switchMap(() => this.route.queryParamMap),
        takeUntil(this.unsubscribe$)
      ).subscribe((p:any) => {
        console.log('tab subs', p)
        console.log('tab receive, is timer on?', this.timerOn)
        if (p.params.label && this.timerOn) {
          this.disableBrewTab = true
          console.log('pass disable true')
        } else {
          this.disableBrewTab = false
          console.log('pass disable false')
        }
      }) */
    }

  ngOnInit() {
  }


  ngOnDestroy(): void {
    /* this.unsubscribe$.next(true)
    this.unsubscribe$.complete() */
  }

}
