import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErrorcompraPageRoutingModule } from './errorcompra-routing.module';

import { ErrorcompraPage } from './errorcompra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErrorcompraPageRoutingModule
  ],
  declarations: [ErrorcompraPage]
})
export class ErrorcompraPageModule {}
