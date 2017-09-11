import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DashboardPage } from './../pages/dashboard/dashboard';
import { TrackerPage } from './../pages/tracker/tracker';
import { HadithPage } from './../pages/hadith/hadith';
import { InstagramPage } from './../pages/instagram/instagram';
import { DzikrPage } from './../pages/dzikr/dzikr';
import { DawahPage } from './../pages/dawah/dawah';
import { AlquranPage } from './../pages/alquran/alquran';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = DashboardPage;

  pages: Array<{logo: string, title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    this.pages = [
      { logo: '../assets/img/logo-aside/1-aside-home.png', title: 'Home', component: DashboardPage },
      { logo: '../assets/img/logo-aside/2-aside-quran.png', title: 'Al-Quran', component: AlquranPage },
      { logo: '../assets/img/logo-aside/3-aside-play.png', title: 'Da`wah', component: DawahPage },
      { logo: '../assets/img/logo-aside/4-aside-stopwatch.png', title: 'Dzikr', component: DzikrPage },
      { logo: '../assets/img/logo-aside/5-aside-instagram.png', title: 'Instagram', component: InstagramPage },
      { logo: '../assets/img/logo-aside/6-aside-book.png', title: 'Hadith', component: HadithPage },
      { logo: '../assets/img/logo-aside/7-aside-tracker.png', title: 'Tracker', component: TrackerPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
