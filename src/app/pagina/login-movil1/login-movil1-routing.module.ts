import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginMovil1Page } from './login-movil1.page';

const routes: Routes = [
  {
    path: '',
    component: LoginMovil1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginMovil1PageRoutingModule {}
