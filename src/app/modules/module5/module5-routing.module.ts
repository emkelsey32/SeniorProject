import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleFiveConceptualComponent } from './module-five-conceptual/module-five-conceptual.component';
import { ModuleFivePageOneComponent } from './module-five-page-one/module-five-page-one.component';
import { ModuleFivePageThreeComponent } from './module-five-page-three/module-five-page-three.component';
import { ModuleFivePageTwoComponent } from './module-five-page-two/module-five-page-two.component';

const routes: Routes = [
  {
    path: '',
    component: ModuleFivePageOneComponent
  },
  {
    path: 'module-5.1',
    component: ModuleFivePageOneComponent
  },
  {
    path: 'module-5.2',
    component: ModuleFivePageTwoComponent
  },
  {
    path: 'module-5.3',
    component: ModuleFivePageThreeComponent
  },
  {
    path: 'module-5.conceptual',
    component: ModuleFiveConceptualComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module5RoutingModule { }
