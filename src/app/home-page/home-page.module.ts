import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { HomeNavbarModule } from '../home-navbar/home-navbar.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreatorsCarouselModule } from '../creators-carousel/creators-carousel.module';


@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    HomeNavbarModule,
    NgbModule,
    CreatorsCarouselModule
  ]
})
export class HomePageModule { }
