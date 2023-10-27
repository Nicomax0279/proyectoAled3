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

}
