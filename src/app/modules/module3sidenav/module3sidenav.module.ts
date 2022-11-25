import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module3sidenavComponent } from './module3sidenav.component';



@NgModule({
  declarations: [Module3sidenavComponent],
  imports: [
    CommonModule
  ],
  exports:[
    Module3sidenavComponent
  ]
})
export class Module3sidenavModule { }
