import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleThreePageTwoRoutingModule } from './module-three-page-two-routing.module';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleThreePageTwoRoutingModule,
    MainNavbarModule
  ]
})
export class ModuleThreePageTwoModule { }
