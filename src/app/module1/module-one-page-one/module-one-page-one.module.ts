import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleOnePageOneRoutingModule } from './module-one-page-one-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleOnePageOneRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleOnePageOneModule { }
