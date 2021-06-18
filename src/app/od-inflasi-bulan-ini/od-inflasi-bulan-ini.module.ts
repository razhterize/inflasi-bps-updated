import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdInflasiBulanIniPageRoutingModule } from './od-inflasi-bulan-ini-routing.module';

import { OdInflasiBulanIniPage } from './od-inflasi-bulan-ini.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdInflasiBulanIniPageRoutingModule
  ],
  declarations: [OdInflasiBulanIniPage]
})
export class OdInflasiBulanIniPageModule {}
