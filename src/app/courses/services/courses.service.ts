import { HttpClient } from '@angular/common/http';
import { Course } from './../interfaces/course';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  route = `${environment.route}/api/courses`

  constructor(private http:HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.route)
  }
  getCourseById(id: number): Observable<Course> {

    return this.http.get<Course>(`${this.route}/${id}`)
  }
  addCourse(newCourse: Course): Observable<Course[]> {

    return this.http.post<Course[]>(this.route,newCourse)
  }

  updateCourse(id: number, updatedCourse: Course): Observable<Course[]> {
    return this.http.put<Course[]>(`${this.route}/${id}`,updatedCourse)
  }

  deleteCourse(courseId: number): Observable<Course[]> {
   return this.http.delete<Course[]>(`${this.route}/${courseId}`)
  }
}
