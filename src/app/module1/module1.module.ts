import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { ModuleOnePageOneComponent } from './module-one-page-one/module-one-page-one.component';
import { ModuleOnePageTwoComponent } from './module-one-page-two/module-one-page-two.component';
import { ModuleOnePracticalComponent } from './module-one-practical/module-one-practical.component';

@NgModule({
  declarations: [
    ModuleOnePageOneComponent,
    ModuleOnePageTwoComponent,
    ModuleOnePracticalComponent
  ],
  imports: [
    CommonModule,
    Module1RoutingModule
  ]
})
export class Module1Module { }
