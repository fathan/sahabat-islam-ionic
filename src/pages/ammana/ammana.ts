import { Component } from '@angular/core';
import {
        IonicPage,
        NavController,
        NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ammana',
  templateUrl: 'ammana.html',
})
export class AmmanaPage {
  menuAmmana: string = 'about_us'

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmmanaPage');
  }

}
