import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
    path: 'moduleOne', 
    loadChildren: () => import('./module1/module1.module').then(m => m.Module1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
