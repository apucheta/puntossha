import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetPage } from './reset.page';

const routes: Routes = [
  {
    path: '',
    component: ResetPage
  },
  {
    path: 'confirma',
    loadChildren: () => import('./confirma/confirma.module').then( m => m.ConfirmaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPageRoutingModule {}
