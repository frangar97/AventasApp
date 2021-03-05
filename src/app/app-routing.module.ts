import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pineo',
    loadChildren: () => import('./geoposicion/pages/pineo/pineo.module').then(m => m.PineoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Login/login/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'check',
    loadChildren: () => import('./agenda/pages/check/check.module').then(m => m.CheckPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
