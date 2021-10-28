import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TimerService } from './timer.service';
import { AllTeas } from './components/models/allTea.model';
import { Tea } from './components/models/tea.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: 'timer.page.html',
  styleUrls: ['timer.page.scss']
})
export class TimerPage implements OnInit {

  allTeas = {
    green: {
      name: 'green tea',
      color: 'green',
      teaAmount: 5,
      waterAmount: 250,
      temperature: 70,
      brewTime: 10
    },
    oolong: {
      name: 'oolong tea',
      color: 'yellow',
      teaAmount: 5,
      waterAmount: 250,
      temperature: 90,
      brewTime: 60
    },
    red: {
      name: 'red tea',
      color: 'red',
      teaAmount: 5,
      waterAmount: 250,
      temperature: 90,
      brewTime: 90
    },
    puer: {
      name: 'puer tea',
      color: 'purple',
      teaAmount: 5,
      waterAmount: 250,
      temperature: 100,
      brewTime: 105
    },
    herbal: {
      code: 'herbal',
      name: 'herbal tea',
      color: 'pink',
      teaAmount: 5,
      waterAmount: 250,
      temperature: 90,
      brewTime: 120
    },
    customizeTea: {
      name: 'customization',
      color: 'none',
      teaAmount: 0,
      waterAmount: 0,
      temperature: 0,
      brewTime: 0
    }
  };

  currentTab = 'green';
  currentTea = this.allTeas.green;
  timerIsOn = false;

  constructor(private timerService: TimerService,
    private cdf: ChangeDetectorRef) {}

  ngOnInit() {
    this.timerService.timerIsCompleted$.subscribe(comp => {
      if (!comp) {
        this.timerIsOn = true;
        this.cdf.detectChanges();
      } else {
        this.timerIsOn = false;
        this.cdf.detectChanges();
      }
    });
  }

  chooseTea(tea) {
    if(!this.timerIsOn) {
      this.currentTea = this.allTeas[tea];
      this.currentTab = tea;
    }
  };

}
