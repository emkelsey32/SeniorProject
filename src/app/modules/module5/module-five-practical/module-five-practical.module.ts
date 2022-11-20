import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleFivePracticalRoutingModule } from './module-five-practical-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleFivePracticalRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleFivePracticalModule { }
