import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageContainerComponent } from '../pages/Homepage/container/homepage-container.component';
import { LoginComponent } from '../pages/Auth/login/login.component';

const routes: Routes = [
    {
      path: 'homepage',
      component: HomepageContainerComponent
    },
    {
      path: '',
      loadChildren: () => import('./../pages/Auth/authentification.module').then(m => m.AuthentificationModule),
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
