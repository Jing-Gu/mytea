import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxGaugeModule } from 'ngx-gauge';
import { TimercountdownComponent } from './timercountdown/timercountdown.component';



@NgModule({
  declarations: [TimercountdownComponent],
  imports: [
    CommonModule,
    NgxGaugeModule
  ],
  exports: [
    NgxGaugeModule,
    TimercountdownComponent
  ]
})
export class SharedModule { }
