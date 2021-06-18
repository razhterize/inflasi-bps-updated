import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdInflasiTahunKeTahunPageRoutingModule } from './od-inflasi-tahun-ke-tahun-routing.module';

import { OdInflasiTahunKeTahunPage } from './od-inflasi-tahun-ke-tahun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdInflasiTahunKeTahunPageRoutingModule
  ],
  declarations: [OdInflasiTahunKeTahunPage]
})
export class OdInflasiTahunKeTahunPageModule {}
