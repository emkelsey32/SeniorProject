import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModuleOnePageOneComponent } from './module-one-page-one/module-one-page-one.component';
import { ModuleOnePageTwoComponent } from './module-one-page-two/module-one-page-two.component';
import { ModuleOnePracticalComponent } from './module-one-practical/module-one-practical.component';
import { Module1Component } from './module1.component';

const routes: Routes = [
  {
    path: '',
    component: ModuleOnePracticalComponent
  },
  {
    path: 'module-1.1',
    component: ModuleOnePageOneComponent
  },
  {
    path: 'module-1.2',
    component: ModuleOnePageTwoComponent
  },
  {
    path: 'module-1.practical',
    component: ModuleOnePracticalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
