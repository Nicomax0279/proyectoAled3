import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';
import { StudentModifyComponent } from './student-modify/student-modify.component';
import { IsAdminGuard } from '../guards/is-admin.guard';
import { ActivePipe } from './active.pipe';

const studentRoutes: Routes = [
  //{ path: '', component: StudentMainComponent , children:[{path: '' , component:StudentListComponent }]}
  { path: '', component: StudentListComponent },
  { path: 'modify/:id', component: StudentModifyComponent , canActivate:[IsAdminGuard]},
];

@NgModule({
  declarations: [StudentListComponent, StudentModifyComponent, ActivePipe],
  imports: [CommonModule, SharedModule, RouterModule.forChild(studentRoutes)],
  exports: [StudentListComponent],
})
export class StudentsModule {}
