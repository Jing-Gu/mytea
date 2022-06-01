import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeaDetailPage } from './tea-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TeaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeaDetailPageRoutingModule {}
