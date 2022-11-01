import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { ProfilePageComponent } from './profile-page.component';
import { MainNavbarModule } from '../main-navbar/main-navbar.module';
import { EditUserInfoComponent } from './edit-user-info/edit-user-info.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfilePageComponent,
    EditUserInfoComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    ProfilePageRoutingModule,
    MainNavbarModule,
    ReactiveFormsModule
  ]
})
export class ProfilePageModule { }
