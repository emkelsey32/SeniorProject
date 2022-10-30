import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { ProfilePageComponent } from './profile-page.component';
import { MainNavbarModule } from '../main-navbar/main-navbar.module';
import { EditUserInfoModule } from '../modal/edit-user-info/edit-user-info.module';
import { ResetPasswordModule } from '../modal/reset-password/reset-password.module';


@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    ProfilePageRoutingModule,
    MainNavbarModule,
    EditUserInfoModule,
    ResetPasswordModule
  ]
})
export class ProfilePageModule { }
