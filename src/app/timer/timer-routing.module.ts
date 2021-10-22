import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerPage } from './timer.page';

const routes: Routes = [
  {
    path: '',
    component: TimerPage,
  },
  {
    path: 'customize-timer',
    loadChildren: () => import('./customize-timer/customize-timer.module').then( m => m.CustomizeTimerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimerPageRoutingModule {}
