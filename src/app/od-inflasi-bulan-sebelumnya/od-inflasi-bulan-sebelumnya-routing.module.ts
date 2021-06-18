import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdInflasiBulanSebelumnyaPage } from './od-inflasi-bulan-sebelumnya.page';

const routes: Routes = [
  {
    path: '',
    component: OdInflasiBulanSebelumnyaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdInflasiBulanSebelumnyaPageRoutingModule {}
