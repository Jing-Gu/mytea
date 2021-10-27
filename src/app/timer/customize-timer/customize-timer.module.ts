import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { CustomizeTimerPageRoutingModule } from './customize-timer-routing.module';
import { CustomizeTimerPage } from './customize-timer.page';

import { TimercountdownComponent } from '../components/timercountdown/timercountdown.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CustomizeTimerPageRoutingModule
  ],
  declarations: [CustomizeTimerPage,TimercountdownComponent]
})
export class CustomizeTimerPageModule {}
