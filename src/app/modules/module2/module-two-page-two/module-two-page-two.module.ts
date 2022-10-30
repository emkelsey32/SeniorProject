import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleTwoPageTwoRoutingModule } from './module-two-page-two-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleTwoPageTwoRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleTwoConceptualModule { }
