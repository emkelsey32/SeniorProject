import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ModuleOnePageOneComponent } from './module-one-page-one/module-one-page-one.component';
import { ModuleOnePageTwoComponent } from './module-one-page-two/module-one-page-two.component';
import { ModuleOnePracticalComponent } from './module-one-practical/module-one-practical.component';
import { ModulePageComponent } from './module-page/module-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'registration-page', component: RegistrationPageComponent},
  {path: "sign-in-page", component: SignInPageComponent},
  {path: 'profile-page', component: ProfilePageComponent},
  {path: 'module-page', component: ModulePageComponent},
  {path: 'terms-and-conditions', component: TermsAndConditionsComponent},
  {path: 'moduleOneOne', component: ModuleOnePageOneComponent},
  {path: 'moduleOneTwo', component: ModuleOnePageTwoComponent},
  {path: "moduleOnePractical", component: ModuleOnePracticalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
