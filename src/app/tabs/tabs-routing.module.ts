import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'timer',
        children: [
          { path: '',
            loadChildren: () => import('../timer/timer.module').then(m => m.TimerPageModule)
          },
          {
            path: 'customize-timer',
            loadChildren: () => import('../timer/customize-timer/customize-timer.module').then(m => m.CustomizeTimerPageModule)
          }
        ]
      },
      {
        path: 'read',
        loadChildren: () => import('../read/read.module').then(m => m.ReadPageModule)
      },
      {
        path: 'more',
        loadChildren: () => import('../more/more.module').then(m => m.MorePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/timer',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/timer',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
