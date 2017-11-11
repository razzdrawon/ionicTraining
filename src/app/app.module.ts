import { AutosPage } from './../pages/autos/autos';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AgmCoreModule } from '@agm/core';

import { Geolocation } from '@ionic-native/geolocation';

import { Diagnostic } from '@ionic-native/diagnostic';
import { GmapsProvider } from '../providers/gmaps/gmaps';
import { HttpModule } from '@angular/http';
import { AutosProvider } from '../providers/autos/autos';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AutosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot(
      {
        apiKey: 'AIzaSyDRViV3SsYfHmGvH9j8xU0bkHeSs-zm9XM'
      }
    ),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AutosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    Diagnostic,
    GmapsProvider,
    AutosProvider
  ]
})
export class AppModule {}
