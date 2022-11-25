import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleFourPageOneRoutingModule } from './module-four-page-one-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleFourPageOneRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleFourPageOneModule { }
