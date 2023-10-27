import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';
import { Observable, last, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students: Student[] = [
    {
      id: 1,
      name: 'Juan',
      surname: 'Pérez',
      career: 'analista de sistemas',
      year: 3,
      birthdate: new Date(1998, 5, 15),
      email: 'juan@example.com',
      phoneNumber: '123-456-7890',
      address: 'Calle Principal 123',
      active: true,
    },
    {
      id: 2,
      name: 'María',
      surname: 'García',
      career: 'radiología',
      year: 2,
      birthdate: new Date(1999, 8, 10),
      email: 'maria@example.com',
      phoneNumber: '987-654-3210',
      address: 'Avenida Secundaria 456',
      active: true,
    },
    {
      id: 3,
      name: 'Carlos',
      surname: 'López',
      career: 'administración de empresas',
      year: 4,
      birthdate: new Date(1997, 3, 25),
      email: 'carlos@example.com',
      phoneNumber: '555-123-4567',
      address: 'Plaza Central 789',
      active: false,
    },
    {
      id: 4,
      name: 'Laura',
      surname: 'Martínez',
      career: 'radiología',
      year: 1,
      birthdate: new Date(2000, 1, 5),
      email: 'laura@example.com',
      phoneNumber: '999-888-7777',
      address: 'Callejón Tranquilo 42',
      active: true,
    },
    {
      id: 5,
      name: 'Andrés',
      surname: 'Rodríguez',
      career: 'analista de sistemas',
      year: 2,
      birthdate: new Date(1999, 10, 20),
      email: 'andres@example.com',
      phoneNumber: '444-333-2222',
      address: 'Avenida Moderna 555',
      active: true,
    },
    // Agrega más usuarios aquí
  ];
  constructor() {}

  getStudents(): Observable<Student[]> {
    return of(this.students);
  }
  getStudentById(id: number): Observable<Student> {
    const studentById = this.students.find((e) => e.id == id);
    if (!studentById) throw new Error('user not found');
    return of({ ...studentById });
  }
  addStudent(newStudent: Student): Observable<Student[]> {
    const lastStudent = this.students[this.students.length - 1]
    if(lastStudent.id) newStudent.id = lastStudent.id + 1

    this.students.push(newStudent);
    return of([...this.students]);
  }

  updateStudent(id: number, updatedStudent: Student): Observable<Student[]> {
    updatedStudent.id = id;
    updatedStudent.active = true;
    const index = this.students.findIndex(
      (student) => student.id === updatedStudent.id
    );

    if (index !== -1) {
      this.students[index] = updatedStudent;
    }
    return of([...this.students]);
  }

  deleteStudent(studentId: number): Observable<Student[]> {
    const index = this.students.findIndex(
      (student) => student.id === studentId
    );
    if (index !== -1) {
      this.students.splice(index, 1);
    } else {
      throw new Error('student not found');
    }
    return of([...this.students]);
  }
}
