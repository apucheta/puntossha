import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExitocompraPage } from './exitocompra.page';

const routes: Routes = [
  {
    path: '',
    component: ExitocompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExitocompraPageRoutingModule {}
