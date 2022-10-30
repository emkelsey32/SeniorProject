import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainNavbarModule } from './main-navbar/main-navbar.module';
import { HomeNavbarModule } from './home-navbar/home-navbar.module';
import { SideNavbarModule } from './side-navbar/side-navbar.module';
import { EditUserInfoComponent } from './modal/edit-user-info/edit-user-info.component';
import { ResetPasswordComponent } from './modal/reset-password/reset-password.component';
import { ModuleTwoConceptualComponent } from './modules/module2/module-two-conceptual/module-two-conceptual.component';
import { ModuleTwoPracticalComponent } from './modules/module2/module-two-practical/module-two-practical.component';
import { ModuleTwoPageOneComponent } from './modules/module2/module-two-page-one/module-two-page-one.component';
import { ModuleTwoPageTwoComponent } from './modules/module2/module-two-page-two/module-two-page-two.component';
import { ModuleTwoPageThreeComponent } from './modules/module2/module-two-page-three/module-two-page-three.component';
import { Module2Component } from './modules/module2/module2.component';
import { Module2sidenavComponent } from './modules/module2sidenav/module2sidenav.component';
@NgModule({
  declarations: [
    AppComponent,
    EditUserInfoComponent,
    ResetPasswordComponent,
    ModuleTwoConceptualComponent,
    ModuleTwoPracticalComponent,
    ModuleTwoPageOneComponent,
    ModuleTwoPageTwoComponent,
    ModuleTwoPageThreeComponent,
    Module2Component,
    Module2sidenavComponent,
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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
