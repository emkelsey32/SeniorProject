import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleFivePageTwoRoutingModule } from './module-five-page-two-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleFivePageTwoRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleFivePageTwoModule { }
