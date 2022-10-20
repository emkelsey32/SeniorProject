import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutInternalPageRoutingModule } from './about-internal-page-routing.module';
import { AboutInternalPageComponent } from './about-internal-page.component';
import { MainNavbarModule } from '../main-navbar/main-navbar.module';

@NgModule({
  declarations: [
    AboutInternalPageComponent,
  ],
  imports: [
    CommonModule,
    AboutInternalPageRoutingModule,
    MainNavbarModule
  ]
})
export class AboutInternalPageModule { }
