import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
import { CoursesMainComponent } from './courses-main/courses-main.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CoursesCardToAddComponent } from './courses-card-to-add/courses-card-to-add.component';


@NgModule({
  declarations: [
    CoursesMainComponent,
    CourseCardComponent,
    CoursesCardToAddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
