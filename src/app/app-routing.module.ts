import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLogedGuard } from './guards/is-loged.guard';
import { IsntLogedGuard } from './guards/isnt-loged.guard';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: 'students',
    loadChildren: () =>
      import('./students/students.module').then((m) => m.StudentsModule),
    canActivate:[IsLogedGuard]

  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesModule),
      canActivate:[IsLogedGuard]
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule), canActivate:[IsntLogedGuard]
  },
  {path: '' , component:MainComponent , canActivate:[IsLogedGuard]},
  {path: '**' , redirectTo:''}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
