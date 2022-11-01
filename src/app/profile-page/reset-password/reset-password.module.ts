import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';
import { ProfilePageRoutingModule } from '../profile-page-routing.module';
import {ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainNavbarModule,
    ProfilePageRoutingModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class ResetPasswordModule { }
