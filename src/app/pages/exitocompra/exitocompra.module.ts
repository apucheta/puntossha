import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExitocompraPageRoutingModule } from './exitocompra-routing.module';

import { ExitocompraPage } from './exitocompra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExitocompraPageRoutingModule
  ],
  declarations: [ExitocompraPage]
})
export class ExitocompraPageModule {}
