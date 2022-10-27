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
import { Module1sidenavModule } from './modules/module1sidenav/module1sidenav.module';
import { EditUserInfoComponent } from './modal/edit-user-info/edit-user-info.component';
@NgModule({
  declarations: [
    AppComponent,
    EditUserInfoComponent,
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
    Module1sidenavModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
