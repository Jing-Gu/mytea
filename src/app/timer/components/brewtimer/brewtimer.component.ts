import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brewtimer',
  templateUrl: './brewtimer.component.html',
  styleUrls: ['./brewtimer.component.scss'],
})
export class BrewtimerComponent implements OnInit {

  @Input() currentTea;

  constructor() { }

  ngOnInit() {}

}
