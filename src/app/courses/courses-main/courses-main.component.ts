import { Course } from './../interfaces/course';
import { Component } from '@angular/core';
import { CoursesService } from '../services/courses.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses-main',
  templateUrl: './courses-main.component.html',
  styleUrls: ['./courses-main.component.css'],
})
export class CoursesMainComponent {
  courses!: Course[];
  courseToEdit!: Course;
  sus?: Subscription;
  toEditId = 0;
  toEdit(id: number) {

      this.toEditId = id;


  }
  constructor(private _coursesService: CoursesService) {}

  ngOnInit() {
    this.sus = this._coursesService.getCourses().subscribe({
      next: (res) => {
        this.courses = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  toEditCourse(course: Course) {
    if(this.isAdmin()){
      this.toEditId = 0;
      this.toEditId = course.id || 0;
      this.courseToEdit = { ...course };
      window.scrollTo(0, 0);
      // console.log( this.toEditId, this.courseToEdit)
    }else{
      alert('para editar cursos debes de ser admin')
    }

  }
  editCourse(course: Course) {
   if(this.isAdmin()){
    if (course.id)
      this._coursesService.updateCourse(course.id, course).subscribe((e) => {
        alert('curso actualizado correctamente');
        this.courses = e

      });}else{
        alert('para editar cursos debes de ser admin')
      }
  }
  addCourse(course: Course) {
    if(this.isAdmin()){
    this._coursesService
      .addCourse(course)
      .subscribe((e) => alert('curso creado correctamente'));
    }else{ alert('para crear cursos debes de ser admin')}
  }
  deleteCourse(course:Course){
    if(this.isAdmin()){
      if(course.id) this._coursesService.deleteCourse(course.id).subscribe((e) => {
        alert('curso eliminado correctamente');
        this.courses = e
      })
    }else{
      alert('para eliminar cursos debes de ser admin')
    }


  }
  isAdmin():boolean{
    const token = localStorage.getItem('token')
      if (token) {
        const tokenData = JSON.parse(atob(token.split('.')[1]));
        //console.log(tokenData)
        return tokenData.role === 'admin';
      }else{return false}
  }
}
