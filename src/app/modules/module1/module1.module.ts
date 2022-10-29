import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { ModuleOnePageOneComponent } from './module-one-page-one/module-one-page-one.component';
import { ModuleOnePageTwoComponent } from './module-one-page-two/module-one-page-two.component';
import { ModuleOnePageThreeComponent } from './module-one-page-three/module-one-page-three.component';
import { ModuleOnePageFourComponent } from './module-one-page-four/module-one-page-four.component';
import { ModuleOnePageFiveComponent } from './module-one-page-five/module-one-page-five.component';

import { ModuleOnePracticalComponent } from './module-one-practical/module-one-practical.component';
import { Module1sidenavModule } from '../module1sidenav/module1sidenav.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';
import { Module1Component } from './module1.component';
import { ModuleOneConceptualComponent } from './module-one-conceptual/module-one-conceptual.component';

@NgModule({
  declarations: [
    ModuleOnePageOneComponent,
    ModuleOnePageTwoComponent,
    ModuleOnePracticalComponent,
    ModuleOnePageFiveComponent,
    ModuleOnePageFourComponent,
    Module1Component,
    ModuleOneConceptualComponent,
    ModuleOnePageThreeComponent
  ],
  imports: [
    CommonModule,
    Module1RoutingModule,
    MainNavbarModule,
    Module1sidenavModule
  ]
})
export class Module1Module { }
