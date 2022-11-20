import { NgModule } from '@angular/core';

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  },
  {
    path: 'edit-user-info', 
    loadChildren: () => import('./profile-page/edit-user-info/edit-user-info.module').then(m => m.EditUserInfoModule)  
  },
  {
    path: 'reset-password', 
    loadChildren: () => import('./profile-page/reset-password/reset-password.module').then(m => m.ResetPasswordModule)  
  },
  {
    path: 'm1', 
    loadChildren: () => import('./modules/module1/module1.module').then(m => m.Module1Module)
  },
  {
    path: 'm2', 
    loadChildren: () => import('./modules/module2/module2.module').then(m => m.Module2Module)
  },
  {
    path: 'm3', 
    loadChildren: () => import('./modules/module3/module3.module').then(m => m.Module3Module)
  },
  {
    path: 'm4', 
    loadChildren: () => import('./modules/module4/module4.module').then(m => m.Module4Module)
  },
  {
    path: 'm5', 
    loadChildren: () => import('./modules/module5/module5.module').then(m => m.Module5Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
