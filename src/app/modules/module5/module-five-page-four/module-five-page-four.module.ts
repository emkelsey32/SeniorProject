import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleFivePageFourRoutingModule } from './module-five-page-four-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleFivePageFourRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleFivePageFourModule { }
