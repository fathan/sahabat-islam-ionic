import { Component } from '@angular/core';
import {
        IonicPage,
        NavController,
        NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tracker',
  templateUrl: 'tracker.html',
})
export class TrackerPage {
  menuTracker: string = 'checklist'

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackerPage');
  }

}
