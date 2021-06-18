import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdMainPage } from './od-main.page';

const routes: Routes = [
  {
    path: '',
    component: OdMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdMainPageRoutingModule {}
