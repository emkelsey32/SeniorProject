import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module4RoutingModule } from './module4-routing.module';
import { ModuleFourPageOneComponent } from './module-four-page-one/module-four-page-one.component';
import { ModuleFourPageTwoComponent } from './module-four-page-two/module-four-page-two.component';
import { ModuleFourPageThreeComponent } from './module-four-page-three/module-four-page-three.component';
import { ModuleFourPageFourComponent } from './module-four-page-four/module-four-page-four.component';
import { ModuleFourPageFiveComponent } from './module-four-page-five/module-four-page-five.component';


import { ModuleFourPracticalComponent } from './module-four-practical/module-four-practical.component';
import { Module4sidenavModule } from '../module4sidenav/module4sidenav.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';
import { Module4Component } from './module4.component';
import { ModuleFourConceptualComponent } from './module-four-conceptual/module-four-conceptual.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ModuleFourPageTwoComponent,
    ModuleFourPageOneComponent,
    ModuleFourPageFourComponent,
    ModuleFourPageFiveComponent,
    ModuleFourPracticalComponent,
    Module4Component,
    ModuleFourConceptualComponent,
    ModuleFourPageThreeComponent
  ],
  imports: [
    CommonModule,
    Module4RoutingModule,
    MainNavbarModule,
    Module4sidenavModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class Module4Module { }
