import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessorsRoutingModule } from './professors-routing.module';
import { ProfessorsListComponent } from './professors-list/professors-list.component';
import { SharedModule } from '../shared/shared/shared.module';
import { ActivePipe } from './pipes/active.pipe';
import { ProfessorModifyComponent } from './professor-modify/professor-modify.component';


@NgModule({
  declarations: [
    ProfessorsListComponent,ActivePipe, ProfessorModifyComponent
  ],
  imports: [
    CommonModule,
    ProfessorsRoutingModule,
    SharedModule
  ]
})
export class ProfessorsModule { }
