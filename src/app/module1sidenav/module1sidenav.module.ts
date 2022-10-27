import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1sidenavComponent } from './module1sidenav.component';



@NgModule({
  declarations: [Module1sidenavComponent],
  imports: [
    CommonModule
  ],
  exports:[
    Module1sidenavComponent
  ]
})
export class Module1sidenavModule { }
