import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleFourPageFiveRoutingModule } from './module-five-page-five-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleFourPageFiveRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleFourPageFiveModule { }
