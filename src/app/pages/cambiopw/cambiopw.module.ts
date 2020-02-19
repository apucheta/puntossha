import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiopwPageRoutingModule } from './cambiopw-routing.module';

import { CambiopwPage } from './cambiopw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiopwPageRoutingModule
  ],
  declarations: [CambiopwPage]
})
export class CambiopwPageModule {}
