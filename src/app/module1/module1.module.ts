import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { ModuleOnePageOneComponent } from './module-one-page-one/module-one-page-one.component';
import { ModuleOnePageTwoComponent } from './module-one-page-two/module-one-page-two.component';
import { ModuleOnePracticalComponent } from './module-one-practical/module-one-practical.component';
import { MainNavbarComponent } from '../main-navbar/main-navbar.component';
@NgModule({
  declarations: [
    ModuleOnePageOneComponent,
    ModuleOnePageTwoComponent,
    ModuleOnePracticalComponent,
    MainNavbarComponent
  ],
  imports: [
    CommonModule,
    Module1RoutingModule
  ]
})
export class Module1Module { }
