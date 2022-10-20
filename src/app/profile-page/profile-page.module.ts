import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { ProfilePageComponent } from './profile-page.component';
import { MainNavbarModule } from '../main-navbar/main-navbar.module';


@NgModule({
  declarations: [
    ProfilePageComponent,
  ],
  imports: [
    CommonModule,
    ProfilePageRoutingModule,
    MainNavbarModule
  ]
})
export class ProfilePageModule { }
