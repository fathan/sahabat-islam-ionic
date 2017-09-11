import {
        NgModule,
        ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
        IonicApp,
        IonicModule,
        IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { AlquranPageModule } from './../pages/alquran/alquran.module';
import { AlquranSurahDetailPageModule } from './../pages/alquran-surah-detail/alquran-surah-detail.module';
import { AmmanaPageModule } from './../pages/ammana/ammana.module';
import { DashboardPageModule } from './../pages/dashboard/dashboard.module';
import { DawahPageModule } from './../pages/dawah/dawah.module';
import { DawahDetailPageModule } from './../pages/dawah-detail/dawah-detail.module';
import { DzikrPageModule } from './../pages/dzikr/dzikr.module';
import { HadithPageModule } from './../pages/hadith/hadith.module';
import { InstagramPageModule } from './../pages/instagram/instagram.module';
import { ListPageModule } from './../pages/list/list.module';
import { TrackerPageModule } from './../pages/tracker/tracker.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    AlquranPageModule,
    AlquranSurahDetailPageModule,
    AmmanaPageModule,
    DashboardPageModule,
    DawahPageModule,
    DawahDetailPageModule,
    DzikrPageModule,
    HadithPageModule,
    InstagramPageModule,
    TrackerPageModule,
    ListPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
