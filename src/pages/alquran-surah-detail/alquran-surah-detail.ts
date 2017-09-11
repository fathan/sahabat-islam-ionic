import { Component } from '@angular/core';
import {
        IonicPage,
        NavController,
        NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-alquran-surah-detail',
  templateUrl: 'alquran-surah-detail.html',
})
export class AlquranSurahDetailPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlquranSurahDetailPage');
  }

}
