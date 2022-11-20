import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleFourPageTwoRoutingModule } from './module-four-page-two-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleFourPageTwoRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleFourPageTwoModule { }
