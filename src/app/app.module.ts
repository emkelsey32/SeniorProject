import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainNavbarModule } from './main-navbar/main-navbar.module';
import { HomeNavbarModule } from './home-navbar/home-navbar.module';
import { SideNavbarModule } from './side-navbar/side-navbar.module';
import { ResetPasswordModule } from './modal/reset-password/reset-password.module';
import { ResetPasswordComponent } from './modal/reset-password/reset-password.component';
import { EditUserInfoModule } from './modal/edit-user-info/edit-user-info.module';
import { CreatorsCarouselComponent } from './creators-carousel/creators-carousel.component';
import { CreatorsCarouselModule } from './creators-carousel/creators-carousel.module';
@NgModule({
  declarations: [
    AppComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MainNavbarModule,
    HomeNavbarModule,
    SideNavbarModule,
    ResetPasswordModule, 
    EditUserInfoModule,
    CreatorsCarouselModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
