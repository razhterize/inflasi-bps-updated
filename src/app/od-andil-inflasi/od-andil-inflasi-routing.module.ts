import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdAndilInflasiPage } from './od-andil-inflasi.page';

const routes: Routes = [
  {
    path: '',
    component: OdAndilInflasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdAndilInflasiPageRoutingModule {}
