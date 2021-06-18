import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InflasiTahunKeTahunPage } from './inflasi-tahun-ke-tahun.page';

const routes: Routes = [
  {
    path: '',
    component: InflasiTahunKeTahunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InflasiTahunKeTahunPageRoutingModule {}
