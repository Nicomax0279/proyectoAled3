import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../interfaces/student';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent {
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  students!: Student[];
  displayedColumns: string[] = [
    'id',
    'name',
    'surname',
    'career',
    'year',
    'birthrate',
    'email',
    'active','actions'
  ];
  sus?:Subscription
  dataSource!: any;

  constructor(private _StudentService: StudentService) {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {
     this.loadTable()
  }
  loadTable(){
    this._StudentService.getStudents().subscribe((data) => {
      this.students = data;
      this.dataSource = new MatTableDataSource<Student>(this.students);
    });
  }

  deleteStudent(id:number){
    this.sus = this._StudentService.deleteStudent(id).subscribe(data=>{
      this.loadTable()
      this.dataSource.paginator = this.paginator;
    })
  }


  ngOnDestroy(){
    if(this.sus){
      this.sus.unsubscribe()
    }
  }
}
