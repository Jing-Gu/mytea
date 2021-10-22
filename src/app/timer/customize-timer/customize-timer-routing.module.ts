import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomizeTimerPage } from './customize-timer.page';

const routes: Routes = [
  {
    path: '',
    component: CustomizeTimerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomizeTimerPageRoutingModule {}
