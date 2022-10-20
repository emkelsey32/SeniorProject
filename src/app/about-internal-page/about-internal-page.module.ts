import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutInternalPageRoutingModule } from './about-internal-page-routing.module';
import { AboutInternalPageComponent } from './about-internal-page.component';

@NgModule({
  declarations: [AboutInternalPageComponent],
  imports: [
    CommonModule,
    AboutInternalPageRoutingModule
  ]
})
export class AboutInternalPageModule { }
