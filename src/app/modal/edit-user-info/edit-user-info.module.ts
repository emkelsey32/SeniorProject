import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserInfoComponent } from './edit-user-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditUserInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    EditUserInfoComponent
  ]
})
export class EditUserInfoModule { }
