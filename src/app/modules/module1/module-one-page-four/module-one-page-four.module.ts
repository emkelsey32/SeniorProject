import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleOnePageFourRoutingModule } from './module-one-page-four-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleOnePageFourRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleOnePageFourModule { }
