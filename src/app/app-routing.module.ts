import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ModulePageComponent } from './module-page/module-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'registration-page', component: RegistrationPageComponent},
  {path: "sign-in-page", component: SignInPageComponent},
  {path: 'profile-page', component: ProfilePageComponent},
  {path: 'module-page', component: ModulePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
