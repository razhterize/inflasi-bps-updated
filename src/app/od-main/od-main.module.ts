import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdMainPageRoutingModule } from './od-main-routing.module';

import { OdMainPage } from './od-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdMainPageRoutingModule
  ],
  declarations: [OdMainPage]
})
export class OdMainPageModule {}
