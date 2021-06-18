import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdInflasiBulanIniPage } from './od-inflasi-bulan-ini.page';

const routes: Routes = [
  {
    path: '',
    component: OdInflasiBulanIniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdInflasiBulanIniPageRoutingModule {}
