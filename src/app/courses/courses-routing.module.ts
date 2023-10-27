import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesMainComponent } from './courses-main/courses-main.component';

const routes: Routes = [{
  path:'', component:CoursesMainComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
