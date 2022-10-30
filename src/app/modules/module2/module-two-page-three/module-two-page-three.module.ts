import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleTwoPageThreeRoutingModule } from './module-two-page-three-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleTwoPageThreeRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleTwoConceptualModule { }
