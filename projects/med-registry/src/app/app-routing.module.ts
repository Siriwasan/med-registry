import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LoginComponent } from './features/login/login.component';
import { AppLayoutComponent } from './core/components/app-layout/app-layout.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/registry/acsd/acsd290',
  //   pathMatch: 'full',
  // },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./features/home/home.module').then((m) => m.HomeModule),
      },
      // {
      //   path: 'registry',
      //   loadChildren: () => import('./features/registry/registry.module').then((m) => m.RegistryModule),
      //   // canActivate: [AuthRoleGuard],
      //   // data: { roles: Auth.menus.registry }
      // },

      // { path: 'about', component: AboutComponent },
      // { path: 'auth', component: AuthComponent },
      // { path: 'page-not-autherized', component: PageNotAutherizedComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
