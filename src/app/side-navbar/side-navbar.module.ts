import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sideNavbarComponent } from './side-navbar';



@NgModule({
  declarations: [sideNavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    sideNavbarComponent
  ]
})
export class SideNavbarModule { }
