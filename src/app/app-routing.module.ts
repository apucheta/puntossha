import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'compra',
    loadChildren: () => import('./pages/compra/compra.module').then( m => m.CompraPageModule)
  },
  {
    path: 'cambiopw',
    loadChildren: () => import('./pages/cambiopw/cambiopw.module').then( m => m.CambiopwPageModule)
  },
  {
    path: 'movimientos',
    loadChildren: () => import('./pages/movimientos/movimientos.module').then( m => m.MovimientosPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  { path: 'compra', loadChildren: './pages/compra/compra.module#CompraPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  

  { path: 'movimientos', loadChildren: './pages/movimientos/movimientos.module#MovimientosPageModule' },
  { path: 'cuenta', loadChildren: './pages/cuenta/cuenta.module#CuentaPageModule' },
  //{ path: 'reset', loadChildren: './pages/reset/reset.module#ResetPageModule' },
  { path: 'cambiopw', loadChildren: './pages/cambiopw/cambiopw.module#CambiopwPageModule' },
  {
    path: 'errorcompra',
    loadChildren: () => import('./pages/errorcompra/errorcompra.module').then( m => m.ErrorcompraPageModule)
  },
  {
    path: 'exitocompra',
    loadChildren: () => import('./pages/exitocompra/exitocompra.module').then( m => m.ExitocompraPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./pages/reset/reset.module').then( m => m.ResetPageModule)
  },
  {
    path: 'transferencia',
    loadChildren: () => import('./pages/transferencia/transferencia.module').then( m => m.TransferenciaPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
  //{ path: 'confirma', loadChildren: './pages/reset/confirma/confirma.module#ConfirmaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
