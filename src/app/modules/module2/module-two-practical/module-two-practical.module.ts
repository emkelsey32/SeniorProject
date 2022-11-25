import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleTwoPracticalRoutingModule } from './module-two-practical-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleTwoPracticalRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleTwoPracticalModule { }
