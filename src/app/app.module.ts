import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgPipesModule } from 'ngx-pipes'

const config = {
  apiKey: "AIzaSyCyP0MpeR7-t-UzwIId_qzp3zlsByRuzwI",
  authDomain: "inflasi-bpskotamadiun.firebaseapp.com",
  databaseURL: "https://inflasi-bpskotamadiun.firebaseio.com",
  projectId: "inflasi-bpskotamadiun",
  storageBucket: "inflasi-bpskotamadiun.appspot.com",
  messagingSenderId: "736057208162",
  appId: "1:736057208162:web:6027fdaef843ef9687903b",
  measurementId: "G-K2E1SYKKEB"
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      AngularFireModule.initializeApp(config),
      AngularFirestoreModule.enablePersistence(),
      AngularFireAuthModule,
      NgPipesModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
