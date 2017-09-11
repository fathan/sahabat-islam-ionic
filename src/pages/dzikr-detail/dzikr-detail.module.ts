import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DzikrDetailPage } from './dzikr-detail';

@NgModule({
  declarations: [
    DzikrDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DzikrDetailPage),
  ],
})
export class DzikrDetailPageModule {}
