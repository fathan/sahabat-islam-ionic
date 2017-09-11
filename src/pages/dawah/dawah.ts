import { Component } from '@angular/core';
import {
        IonicPage,
        NavController,
        NavParams } from 'ionic-angular';

import { DawahDetailPage } from './../dawah-detail/dawah-detail';

@IonicPage()
@Component({
  selector: 'page-dawah',
  templateUrl: 'dawah.html',
})
export class DawahPage {
  menuDawah: string = 'updates'

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DawahPage');
  }

  dakwahDetail () {
    this.navCtrl.push(DawahDetailPage)
  }

}
