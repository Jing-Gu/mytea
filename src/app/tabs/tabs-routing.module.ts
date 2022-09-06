import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'brew',
        children: [
          { path: '',
            loadChildren: () => import('../brew/brew.module').then(m => m.BrewPageModule)
          },
/*           {
            path: 'timer',
            loadChildren: () => import('../brew/timer/timer.module').then(m => m.TimerPageModule)
          } */
        ]
      },
      {
        path: 'read',
        children: [
          {
            path: '',
            loadChildren: () => import('../read/read.module').then(m => m.ReadPageModule)
          },
          {
            path: 'detail',
            loadChildren: () => import('../read/tea-detail/tea-detail.module').then(m => m.TeaDetailPageModule)
          }
        ]
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
    redirectTo: '/tabs/brew',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
