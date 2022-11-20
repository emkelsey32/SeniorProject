import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module5sidenavComponent } from './module5sidenav.component';



@NgModule({
  declarations: [Module5sidenavComponent],
  imports: [
    CommonModule
  ],
  exports:[
    Module5sidenavComponent
  ]
})
export class Module5sidenavModule { }
