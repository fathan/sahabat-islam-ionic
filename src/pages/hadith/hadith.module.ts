import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HadithPage } from './hadith';

@NgModule({
  declarations: [
    HadithPage,
  ],
  imports: [
    IonicPageModule.forChild(HadithPage),
  ],
})
export class HadithPageModule {}
