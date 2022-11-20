import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module4sidenavComponent } from './module4sidenav.component';



@NgModule({
  declarations: [Module4sidenavComponent],
  imports: [
    CommonModule
  ],
  exports:[
    Module4sidenavComponent
  ]
})
export class Module4sidenavModule { }
