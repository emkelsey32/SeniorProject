import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleOneConceptualComponent } from './module-one-conceptual/module-one-conceptual.component';
import { ModuleOnePageFiveComponent } from './module-one-page-five/module-one-page-five.component';
import { ModuleOnePageFourComponent } from './module-one-page-four/module-one-page-four.component';

import { ModuleOnePageOneComponent } from './module-one-page-one/module-one-page-one.component';
import { ModuleOnePageThreeComponent } from './module-one-page-three/module-one-page-three.component';
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
    path: 'module-1.3',
    component: ModuleOnePageThreeComponent
  },
  {
    path: 'module-1.4',
    component: ModuleOnePageFourComponent
  },
  {
    path: 'module-1.5',
    component: ModuleOnePageFiveComponent
  },
  {
    path: 'module-1.practical',
    component: ModuleOnePracticalComponent
  },
  {
    path: 'module-1.conceptual',
    component: ModuleOneConceptualComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
