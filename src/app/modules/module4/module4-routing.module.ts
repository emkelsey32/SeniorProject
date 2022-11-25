import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleFourConceptualComponent } from './module-four-conceptual/module-four-conceptual.component';
import { ModuleFourPageOneComponent } from './module-four-page-one/module-four-page-one.component';
import { ModuleFourPageThreeComponent } from './module-four-page-three/module-four-page-three.component';
import { ModuleFourPageTwoComponent } from './module-four-page-two/module-four-page-two.component';
import { ModuleFourPageFourComponent } from './module-four-page-four/module-four-page-four.component';
import { ModuleFourPageFiveComponent } from './module-four-page-five/module-four-page-five.component';

import { ModuleFourPracticalComponent } from './module-four-practical/module-four-practical.component';

const routes: Routes = [
  {
    path: '',
    component: ModuleFourPracticalComponent
  },
  {
    path: 'module-4.1',
    component: ModuleFourPageOneComponent
  },
  {
    path: 'module-4.2',
    component: ModuleFourPageTwoComponent
  },
  {
    path: 'module-4.3',
    component: ModuleFourPageThreeComponent
  },
  {
    path: 'module-4.4',
    component: ModuleFourPageFourComponent
  },
  {
    path: 'module-4.5',
    component: ModuleFourPageFiveComponent
  },
  {
    path: 'module-4.practical',
    component: ModuleFourPracticalComponent
  },
  {
    path: 'module-4.conceptual',
    component: ModuleFourConceptualComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module4RoutingModule { }
