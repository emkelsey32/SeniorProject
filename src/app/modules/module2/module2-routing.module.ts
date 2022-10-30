import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleTwoConceptualComponent } from './module-two-conceptual/module-two-conceptual.component';
import { ModuleTwoPageOneComponent } from './module-two-page-one/module-two-page-one.component';
import { ModuleTwoPageThreeComponent } from './module-two-page-three/module-two-page-three.component';
import { ModuleTwoPageTwoComponent } from './module-two-page-two/module-two-page-two.component';
import { ModuleTwoPracticalComponent } from './module-two-practical/module-two-practical.component';
import { Module2Component } from './module2.component';

const routes: Routes = [
  {
    path: '',
    component: ModuleTwoPracticalComponent
  },
  {
    path: 'module-2.1',
    component: ModuleTwoPageOneComponent
  },
  {
    path: 'module-2.2',
    component: ModuleTwoPageTwoComponent
  },
  {
    path: 'module-2.3',
    component: ModuleTwoPageThreeComponent
  },
  {
    path: 'module-2.practical',
    component: ModuleTwoPracticalComponent
  },
  {
    path: 'module-2.conceptual',
    component: ModuleTwoConceptualComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
