import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleOnePageFiveRoutingModule } from './module-one-page-five-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleOnePageFiveRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleOnePageFiveModule { }
