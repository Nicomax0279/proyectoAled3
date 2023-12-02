import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorsListComponent } from './professors-list/professors-list.component';
import { ProfessorModifyComponent } from './professor-modify/professor-modify.component';
import { IsAdminGuard } from '../guards/is-admin.guard';

const routes: Routes = [{path:'' , component:ProfessorsListComponent},{path:'modify/:id' , component:ProfessorModifyComponent , canActivate:[IsAdminGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorsRoutingModule { }
