import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../app/components/auth/auth.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  {
    path: 'home',
    loadComponent: () =>
      import('../app/pages/homepage/homepage.component').then(
        (m) => m.HomepageComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('../app/pages/cart/cart.page').then((m) => m.CartPageComponent),
  },
  {
    path: 'plp',
    loadComponent: () =>
      import('../app/pages/plp/plp.component').then((m) => m.PlpComponent),
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
