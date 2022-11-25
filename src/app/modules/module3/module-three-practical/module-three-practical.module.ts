import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleThreePracticalRoutingModule } from './module-three-practical-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleThreePracticalRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleThreePracticalModule { }
