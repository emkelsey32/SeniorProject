import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserInfoComponent } from './edit-user-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainNavbarModule } from 'src/app/main-navbar/main-navbar.module';
import { ProfilePageRoutingModule } from '../profile-page-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainNavbarModule,
    ProfilePageRoutingModule
  ],
  exports: [
  ]
})
export class EditUserInfoModule { }
