import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorsCarouselComponent } from './creators-carousel.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    CreatorsCarouselComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule
  ],
  exports: [
    CreatorsCarouselComponent
  ]
})
export class CreatorsCarouselModule { }
