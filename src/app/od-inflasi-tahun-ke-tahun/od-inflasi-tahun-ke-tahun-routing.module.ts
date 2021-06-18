import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdInflasiTahunKeTahunPage } from './od-inflasi-tahun-ke-tahun.page';

const routes: Routes = [
  {
    path: '',
    component: OdInflasiTahunKeTahunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdInflasiTahunKeTahunPageRoutingModule {}
