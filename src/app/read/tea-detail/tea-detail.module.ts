import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeaDetailPageRoutingModule } from './tea-detail-routing.module';

import { TeaDetailPage } from './tea-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeaDetailPageRoutingModule
  ],
  declarations: [TeaDetailPage]
})
export class TeaDetailPageModule {}
