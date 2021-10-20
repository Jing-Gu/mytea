import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brewguide',
  templateUrl: './brewguide.component.html',
  styleUrls: ['./brewguide.component.scss'],
})
export class BrewguideComponent implements OnInit {
  @Input() currentTea;

  constructor() { }

  ngOnInit() {}

}
