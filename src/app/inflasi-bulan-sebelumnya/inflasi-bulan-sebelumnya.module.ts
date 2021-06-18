import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InflasiBulanSebelumnyaPageRoutingModule } from './inflasi-bulan-sebelumnya-routing.module';

import { InflasiBulanSebelumnyaPage } from './inflasi-bulan-sebelumnya.page';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgPipesModule,
    InflasiBulanSebelumnyaPageRoutingModule
  ],
  declarations: [InflasiBulanSebelumnyaPage]
})
export class InflasiBulanSebelumnyaPageModule {}
