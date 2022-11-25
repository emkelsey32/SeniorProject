import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module5RoutingModule } from './module5-routing.module';
import { ModuleFivePageOneComponent } from './module-five-page-one/module-five-page-one.component';
import { ModuleFivePageTwoComponent } from './module-five-page-two/module-five-page-two.component';
import { ModuleFivePageThreeComponent } from './module-five-page-three/module-five-page-three.component';
import { Module5sidenavModule } from '../module5sidenav/module5sidenav.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';
import { Module5Component } from './module5.component';
import { ModuleFiveConceptualComponent } from './module-five-conceptual/module-five-conceptual.component';

@NgModule({
  declarations: [
    ModuleFivePageTwoComponent,
    ModuleFivePageOneComponent,
    Module5Component,
    ModuleFiveConceptualComponent,
    ModuleFivePageThreeComponent
  ],
  imports: [
    CommonModule,
    Module5RoutingModule,
    MainNavbarModule,
    Module5sidenavModule
  ]
})
export class Module5Module { }
