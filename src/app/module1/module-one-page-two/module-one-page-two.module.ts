import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleOnePageTwoRoutingModule } from './module-one-page-two-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleOnePageTwoRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleOnePageTwoModule { }
