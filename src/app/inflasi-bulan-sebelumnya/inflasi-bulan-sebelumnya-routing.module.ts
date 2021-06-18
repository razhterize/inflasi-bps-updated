import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InflasiBulanSebelumnyaPage } from './inflasi-bulan-sebelumnya.page';

const routes: Routes = [
  {
    path: '',
    component: InflasiBulanSebelumnyaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InflasiBulanSebelumnyaPageRoutingModule {}
