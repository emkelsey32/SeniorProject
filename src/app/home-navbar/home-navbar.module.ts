import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeNavbarComponent } from './home-navbar.component';



@NgModule({
  declarations: [HomeNavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeNavbarComponent
  ]
})
export class HomeNavbarModule { }
