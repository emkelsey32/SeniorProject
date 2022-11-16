import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleThreeConceptualRoutingModule } from './module-three-conceptual-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleThreeConceptualRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleThreeConceptualModule { }
