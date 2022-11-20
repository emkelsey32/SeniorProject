import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleFourPageFourRoutingModule } from './module-four-page-four-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleFourPageFourRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleFourPageFourModule { }
