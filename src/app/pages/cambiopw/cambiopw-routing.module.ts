import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiopwPage } from './cambiopw.page';

const routes: Routes = [
  {
    path: '',
    component: CambiopwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiopwPageRoutingModule {}
