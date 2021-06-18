import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InflasiBulanIniPageRoutingModule } from './inflasi-bulan-ini-routing.module';

import { InflasiBulanIniPage } from './inflasi-bulan-ini.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InflasiBulanIniPageRoutingModule
  ],
  declarations: [InflasiBulanIniPage]
})
export class InflasiBulanIniPageModule {}
