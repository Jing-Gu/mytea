import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgxGaugeModule } from 'ngx-gauge';
import { TimercountdownComponent } from './timercountdown/timercountdown.component';



@NgModule({
  declarations: [TimercountdownComponent],
  imports: [
    IonicModule,
    CommonModule,
    NgxGaugeModule
  ],
  exports: [
    IonicModule,
    NgxGaugeModule,
    TimercountdownComponent
  ]
})
export class SharedModule { }
