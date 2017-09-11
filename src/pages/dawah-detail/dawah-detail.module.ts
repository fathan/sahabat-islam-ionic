import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DawahDetailPage } from './dawah-detail';

@NgModule({
  declarations: [
    DawahDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DawahDetailPage),
  ],
})
export class DawahDetailPageModule {}
