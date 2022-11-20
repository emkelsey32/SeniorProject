import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleFourPracticalRoutingModule } from './module-four-practical-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleFourPracticalRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleFourPracticalModule { }
