import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../interfaces/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
 @Input() course!:Course
 @Output() editCourse = new EventEmitter<Course>()
 @Output() deleteCourse = new EventEmitter<Course>()
 toEdit(){

  this.editCourse.emit(this.course)
 }
 delete(){
  this.deleteCourse.emit(this.course)
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
