import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimerPage } from './timer.page';
import { TimerPageRoutingModule } from './timer-routing.module';
import { BrewguideComponent } from './components/brewguide/brewguide.component';
import { BrewtimerComponent } from './components/brewtimer/brewtimer.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TimerPageRoutingModule
  ],
  declarations: [TimerPage, BrewguideComponent, BrewtimerComponent]
})
export class TimerPageModule {}
