import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleTwoConceptualRoutingModule } from './module-two-conceptual-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleTwoConceptualRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleTwoConceptualModule { }
