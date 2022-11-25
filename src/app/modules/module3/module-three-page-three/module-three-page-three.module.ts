import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleThreePageThreeRoutingModule } from './module-three-page-three-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleThreePageThreeRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleThreePageThreeModule { }
