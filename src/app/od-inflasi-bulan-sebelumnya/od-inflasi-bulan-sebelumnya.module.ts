import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdInflasiBulanSebelumnyaPageRoutingModule } from './od-inflasi-bulan-sebelumnya-routing.module';

import { OdInflasiBulanSebelumnyaPage } from './od-inflasi-bulan-sebelumnya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdInflasiBulanSebelumnyaPageRoutingModule
  ],
  declarations: [OdInflasiBulanSebelumnyaPage]
})
export class OdInflasiBulanSebelumnyaPageModule {}
