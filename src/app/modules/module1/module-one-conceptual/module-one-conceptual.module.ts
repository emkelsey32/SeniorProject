import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleOneConceptualRoutingModule } from './module-one-conceptual-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleOneConceptualRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleOneConceptualModule { }
