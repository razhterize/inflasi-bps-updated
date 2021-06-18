import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AndilInflasiPage } from './andil-inflasi.page';

const routes: Routes = [
  {
    path: '',
    component: AndilInflasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AndilInflasiPageRoutingModule {}
