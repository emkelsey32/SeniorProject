import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleFivePageOneRoutingModule } from './module-five-page-one-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleFivePageOneRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleFivePageOneModule { }
