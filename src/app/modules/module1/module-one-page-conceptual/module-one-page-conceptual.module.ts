import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleOnePageConceptualRoutingModule } from './module-one-page-conceptual-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleOnePageConceptualRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleOnePageConceptualModule { }
