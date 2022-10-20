import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationPageRoutingModule } from './registration-page-routing.module';
import { RegistrationPageComponent } from './registration-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegistrationPageComponent,
  ],
  imports: [
    CommonModule,
    RegistrationPageRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class RegistrationPageModule { }
