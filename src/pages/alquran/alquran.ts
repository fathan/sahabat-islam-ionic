import { Component } from '@angular/core';
import {
        IonicPage,
        NavController,
        NavParams } from 'ionic-angular';

import { AlquranSurahDetailPage } from './../alquran-surah-detail/alquran-surah-detail';

@IonicPage()
@Component({
  selector: 'page-alquran',
  templateUrl: 'alquran.html',
})
export class AlquranPage {
  menuAlquran: string = 'surah'

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlquranPage');
  }

  alquranSurahDetail () {
    this.navCtrl.push(AlquranSurahDetailPage)
  }

}
