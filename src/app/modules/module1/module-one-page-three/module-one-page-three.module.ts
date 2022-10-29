import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleOnePageThreeRoutingModule } from './module-one-page-three-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleOnePageThreeRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleOnePageTwoModule { }
