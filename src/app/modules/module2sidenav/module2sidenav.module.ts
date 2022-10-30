import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module2sidenavComponent } from './module2sidenav.component';



@NgModule({
  declarations: [Module2sidenavComponent],
  imports: [
    CommonModule
  ],
  exports:[
    Module2sidenavComponent
  ]
})
export class Module2sidenavModule { }
