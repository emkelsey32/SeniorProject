import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { ModuleTwoPageOneComponent } from './module-two-page-one/module-two-page-one.component';
import { ModuleTwoPageTwoComponent } from './module-two-page-two/module-two-page-two.component';
import { ModuleTwoPageThreeComponent } from './module-two-page-three/module-two-page-three.component';


import { ModuleTwoPracticalComponent } from './module-two-practical/module-two-practical.component';
import { Module2sidenavModule } from '../module2sidenav/module2sidenav.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';
import { Module2Component } from './module2.component';
import { ModuleTwoConceptualComponent } from './module-two-conceptual/module-two-conceptual.component';

@NgModule({
  declarations: [
    ModuleTwoPageTwoComponent,
    ModuleTwoPageTwoComponent,
    ModuleTwoPageOneComponent,
    ModuleTwoPracticalComponent,
    Module2Component,
    ModuleTwoConceptualComponent,
    ModuleTwoPageThreeComponent
  ],
  imports: [
    CommonModule,
    Module2RoutingModule,
    MainNavbarModule,
    Module2sidenavModule
  ]
})
export class Module2Module { }
