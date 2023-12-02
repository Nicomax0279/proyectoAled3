import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Professor } from '../interfaces/professor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorsService {
  route = `${environment.route}/api/professors`
  constructor(private http:HttpClient) { }
  getProfessors(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.route)
  }
  getProfessorById(id: number): Observable<Professor> {
    return this.http.get<Professor>(`${this.route}/${id}`)
  }
  addProfessor(newProfessor: Professor): Observable<Professor[]> {
    return this.http.post<Professor[]>(this.route,newProfessor)

  }
  updateProfessor(id: number, updatedProfessor: Professor): Observable<Professor[]> {
    return this.http.put<Professor[]>(`${this.route}/${id}`,updatedProfessor)
  }

  deleteProfessor(studentId: number): Observable<Professor[]> {
    return this.http.delete<Professor[]>(`${this.route}/${studentId}`)
  }
}
