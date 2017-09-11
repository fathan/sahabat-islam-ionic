import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstagramPage } from './instagram';

@NgModule({
  declarations: [
    InstagramPage,
  ],
  imports: [
    IonicPageModule.forChild(InstagramPage),
  ],
})
export class InstagramPageModule {}
