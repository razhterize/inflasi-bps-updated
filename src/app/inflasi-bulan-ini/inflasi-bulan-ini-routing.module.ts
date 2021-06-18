import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InflasiBulanIniPage } from './inflasi-bulan-ini.page';

const routes: Routes = [
  {
    path: '',
    component: InflasiBulanIniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InflasiBulanIniPageRoutingModule {}
