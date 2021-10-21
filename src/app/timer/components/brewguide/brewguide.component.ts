import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { TimerService } from '../../timer.service';

@Component({
  selector: 'app-brewguide',
  templateUrl: './brewguide.component.html',
  styleUrls: ['./brewguide.component.scss'],
})
export class BrewguideComponent implements OnInit, OnChanges {
  @Input() currentTea;
  tea;

  constructor(private timerService: TimerService) { }



  ngOnInit() {
  }

  ngOnChanges() {
    this.tea = this.currentTea;
  }

}
