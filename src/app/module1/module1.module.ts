import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { ModuleOnePageOneComponent } from './module-one-page-one/module-one-page-one.component';
import { ModuleOnePageTwoComponent } from './module-one-page-two/module-one-page-two.component';
import { ModuleOnePracticalComponent } from './module-one-practical/module-one-practical.component';
import { MainNavbarModule } from '../main-navbar/main-navbar.module';
import { SideNavbarModule } from '../side-navbar/side-navbar.module';
import { Module1sidenavModule } from '../module1sidenav/module1sidenav.module';
@NgModule({
  declarations: [
    ModuleOnePageOneComponent,
    ModuleOnePageTwoComponent,
    ModuleOnePracticalComponent,
  ],
  imports: [
    CommonModule,
    Module1RoutingModule,
    MainNavbarModule,
    SideNavbarModule,
    Module1sidenavModule
  ]
})
export class Module1Module { }
