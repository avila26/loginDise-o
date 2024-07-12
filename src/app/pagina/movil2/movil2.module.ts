import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Movil2PageRoutingModule } from './movil2-routing.module';

import { Movil2Page } from './movil2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Movil2PageRoutingModule
  ],
  declarations: [Movil2Page]
})
export class Movil2PageModule {}
