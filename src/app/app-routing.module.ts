import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full'
  },
  {
    path: 'login-movil1',
    loadChildren: () => import('./pagina/login-movil1/login-movil1.module').then( m => m.LoginMovil1PageModule)
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./pagina/bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
  },
  {
    path: 'movil2',
    loadChildren: () => import('./pagina/movil2/movil2.module').then( m => m.Movil2PageModule)
  },
  {
    path: 'lottie',
    loadChildren: () => import('./lottie/lottie.module').then( m => m.LottiePageModule)
  },

  {
    path: 'register',
    loadChildren: () => import('./pagina/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pagina/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'error404',
    loadChildren: () => import('./pagina/error404/error404.module').then( m => m.Error404PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
