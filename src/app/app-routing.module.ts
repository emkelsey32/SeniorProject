import { NgModule } from '@angular/core';

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ModuleOnePageOneComponent } from './modules/module1/module-one-page-one/module-one-page-one.component';
import { ModuleOnePageTwoComponent } from './modules/module1/module-one-page-two/module-one-page-two.component';
import { ModuleOnePracticalComponent } from './modules/module1/module-one-practical/module-one-practical.component';


const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'landing-page', 
    loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: 'registration-page', 
    loadChildren: () => import('./registration-page/registration-page.module').then(m => m.RegistrationPageModule)  
  },
  {
    path: "sign-in-page", 
    loadChildren: () => import('./sign-in-page/sign-in-page.module').then(m => m.SignInPageModule)
  },
  {
    path: 'profile-page', 
    loadChildren: () => import('./profile-page/profile-page.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'terms-and-conditions', 
    loadChildren: () => import('./terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsModule)
  },
  {
    path: 'about-page', 
    loadChildren: () => import('./about-internal-page/about-internal-page.module').then(m => m.AboutInternalPageModule)  
  },{
    path: 'm1', 
    loadChildren: () => import('./modules/module1/module1.module').then(m => m.Module1Module)
  },
  {
    path: 'm2', 
    loadChildren: () => import('./modules/module2/module2.module').then(m => m.Module2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
