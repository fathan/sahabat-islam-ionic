import { Component } from '@angular/core';
import {
        IonicPage,
        NavController,
        NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-hadith',
  templateUrl: 'hadith.html',
})
export class HadithPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HadithPage');
  }

}
