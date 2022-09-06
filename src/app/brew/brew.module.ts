import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrewPageRoutingModule } from './brew-routing.module';
import { SharedModule } from '../shared/shared.module';

import { BrewPage } from './brew.page';
import { TstandardComponent } from './components/tstandard/tstandard.component';
import { TmasterComponent } from './components/tmaster/tmaster.component';
import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    BrewPageRoutingModule
  ],
  declarations: [BrewPage, TstandardComponent, TmasterComponent, TimerComponent]
})
export class BrewPageModule {}
