import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdAndilInflasiPageRoutingModule } from './od-andil-inflasi-routing.module';

import { OdAndilInflasiPage } from './od-andil-inflasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdAndilInflasiPageRoutingModule
  ],
  declarations: [OdAndilInflasiPage]
})
export class OdAndilInflasiPageModule {}
