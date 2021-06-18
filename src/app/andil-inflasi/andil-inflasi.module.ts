import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AndilInflasiPageRoutingModule } from './andil-inflasi-routing.module';

import { AndilInflasiPage } from './andil-inflasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AndilInflasiPageRoutingModule
  ],
  declarations: [AndilInflasiPage]
})
export class AndilInflasiPageModule {}
