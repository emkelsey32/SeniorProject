import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleTwoPageOneRoutingModule } from './module-two-page-one-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleTwoPageOneRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleTwoConceptualModule { }
