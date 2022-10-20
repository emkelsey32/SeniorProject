import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutInternalPageComponent } from './about-internal-page.component';

const routes: Routes = [
  {
    path: '',
    component: AboutInternalPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutInternalPageRoutingModule { }
