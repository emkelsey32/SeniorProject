import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserInfoComponent } from './edit-user-info/edit-user-info.component';

import { ProfilePageComponent } from './profile-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePageComponent
  },
  {
    path: 'edit',
    component: EditUserInfoComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule { }
