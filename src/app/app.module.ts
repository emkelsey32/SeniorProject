import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import { MainNavbarComponent } from './main-navbar/main-navbar.component';
//import { NextPageButtonComponent } from './next-page-button/next-page-button.component';
//import { ModuleOnePageOneComponent } from './module1/module-one-page-one/module-one-page-one.component';
//import { ModuleOnePageTwoComponent } from './module1/module-one-page-two/module-one-page-two.component';
//import { ModuleOnePracticalComponent } from './module1/module-one-practical/module-one-practical.component';
//import { Module1sidenavComponent } from './module1sidenav/module1sidenav.component';
//import { ModuleOnePageThreeComponent } from './module1/module-one-page-three/module-one-page-three.component';
//import { ModuleOnePageFourComponent } from './module1/module-one-page-four/module-one-page-four.component';
//import { ModuleOnePageFiveComponent } from './module1/module-one-page-five/module-one-page-five.component';
//import { ModuleOnePageConceptualComponent } from './module1/module-one-page-conceptual/module-one-page-conceptual.component';
//@NgModule({
  //declarations: [
    //AppComponent,
    //HomeNavbarComponent,
    //LandingPageComponent,
    //RegistrationPageComponent,
    //SignInPageComponent,
    //HomePageComponent,
    //ProfilePageComponent,
    //ModulePageComponent,
    //TermsAndConditionsComponent,
    //MainNavbarComponent,
    //NextPageButtonComponent,
    //ModuleOnePageOneComponent,
    //ModuleOnePageTwoComponent,
    //ModuleOnePracticalComponent,
    //Module1sidenavComponent,
    //ModuleOnePageThreeComponent,
    //ModuleOnePageFourComponent,
    //ModuleOnePageFiveComponent,
    //ModuleOnePageConceptualComponent

import { MainNavbarModule } from './main-navbar/main-navbar.module';
import { HomeNavbarModule } from './home-navbar/home-navbar.module';
import { SideNavbarModule } from './side-navbar/side-navbar.module';
import { Module1sidenavModule } from './module1sidenav/module1sidenav.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MainNavbarModule,
    HomeNavbarModule,
    SideNavbarModule,
    Module1sidenavModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
