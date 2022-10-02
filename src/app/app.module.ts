import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ModulePageComponent } from './module-page/module-page.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HomeNavbarComponent,
    LandingPageComponent,
    RegistrationPageComponent,
    SignInPageComponent,
    HomePageComponent,
    ProfilePageComponent,
    ModulePageComponent,
    TermsAndConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
