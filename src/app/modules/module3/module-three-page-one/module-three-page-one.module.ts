import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleThreePageOneRoutingModule } from './module-three-page-one-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleThreePageOneRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleThreePageOneModule { }
