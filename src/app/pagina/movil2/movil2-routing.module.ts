import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Movil2Page } from './movil2.page';

const routes: Routes = [
  {
    path: '',
    component: Movil2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Movil2PageRoutingModule {}
