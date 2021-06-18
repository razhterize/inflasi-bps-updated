import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InflasiTahunKeTahunPageRoutingModule } from './inflasi-tahun-ke-tahun-routing.module';

import { InflasiTahunKeTahunPage } from './inflasi-tahun-ke-tahun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InflasiTahunKeTahunPageRoutingModule
  ],
  declarations: [InflasiTahunKeTahunPage]
})
export class InflasiTahunKeTahunPageModule {}
