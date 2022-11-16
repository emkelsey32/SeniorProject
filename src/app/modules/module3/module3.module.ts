import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module3RoutingModule } from './module3-routing.module';
import { ModuleThreePageOneComponent } from './module-three-page-one/module-three-page-one.component';
import { ModuleThreePageTwoComponent } from './module-three-page-two/module-three-page-two.component';
import { ModuleThreePageThreeComponent } from './module-three-page-three/module-three-page-three.component';


import { ModuleThreePracticalComponent } from './module-three-practical/module-three-practical.component';
import { Module2sidenavModule } from '../module2sidenav/module2sidenav.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';
import { Module3Component } from './module3.component';
import { ModuleThreeConceptualComponent } from './module-three-conceptual/module-three-conceptual.component';

@NgModule({
  declarations: [
    ModuleThreePageTwoComponent,
    ModuleThreePageOneComponent,
    ModuleThreePracticalComponent,
    Module3Component,
    ModuleThreeConceptualComponent,
    ModuleThreePageThreeComponent
  ],
  imports: [
    CommonModule,
    Module3RoutingModule,
    MainNavbarModule,
    Module2sidenavModule
  ]
})
export class Module3Module { }
