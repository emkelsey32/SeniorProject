import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleFiveConceptualRoutingModule } from './module-five-conceptual-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleFiveConceptualRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleFiveConceptualModule { }
