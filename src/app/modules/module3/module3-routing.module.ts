import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleThreeConceptualComponent } from './module-three-conceptual/module-three-conceptual.component';
import { ModuleThreePageOneComponent } from './module-three-page-one/module-three-page-one.component';
import { ModuleThreePageThreeComponent } from './module-three-page-three/module-three-page-three.component';
import { ModuleThreePageTwoComponent } from './module-three-page-two/module-three-page-two.component';
import { ModuleThreePracticalComponent } from './module-three-practical/module-three-practical.component';

const routes: Routes = [
  {
    path: '',
    component: ModuleThreePracticalComponent
  },
  {
    path: 'module-3.1',
    component: ModuleThreePageOneComponent
  },
  {
    path: 'module-3.2',
    component: ModuleThreePageTwoComponent
  },
  {
    path: 'module-3.3',
    component: ModuleThreePageThreeComponent
  },
  {
    path: 'module-3.practical',
    component: ModuleThreePracticalComponent
  },
  {
    path: 'module-3.conceptual',
    component: ModuleThreeConceptualComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module3RoutingModule { }
