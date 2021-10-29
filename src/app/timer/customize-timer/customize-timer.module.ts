import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { CustomizeTimerPageRoutingModule } from './customize-timer-routing.module';
import { CustomizeTimerPage } from './customize-timer.page';

@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    CustomizeTimerPageRoutingModule
  ],
  declarations: [CustomizeTimerPage]
})
export class CustomizeTimerPageModule {}
