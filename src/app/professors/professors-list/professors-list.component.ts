import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Professor } from '../interfaces/professor';
import { Subscription } from 'rxjs';
import { ProfessorsService } from '../services/professors.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-professors-list',
  templateUrl: './professors-list.component.html',
  styleUrls: ['./professors-list.component.css']
})
export class ProfessorsListComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  professors!: Professor[];
  displayedColumns: string[] = [
    'id',
    'name',
    'surname',
    'description',
    'active','actions'
  ];
  sus?:Subscription
  dataSource!: any;

  constructor(private _ProfessorsService: ProfessorsService) {}
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
  ngOnInit() {
     this.loadTable()
  }
  loadTable(){

    this._ProfessorsService.getProfessors().subscribe((data) => {
      this.professors = data;
      this.dataSource = new MatTableDataSource<Professor>(this.professors);
      this.dataSource.paginator = this.paginator;
    });
  }
isAdmin():boolean{
  const token = localStorage.getItem('token')
    if (token) {
      const tokenData = JSON.parse(atob(token.split('.')[1]));
      //console.log(tokenData)
      return tokenData.role === 'admin';
    }else{return false}
}
  deleteProfessor(id:number){
    if(!this.isAdmin()){
      alert("para eliminar estudiantes debes ser admin")
    }else{
      this.sus = this._ProfessorsService.deleteProfessor(id).subscribe(data=>{
        this.loadTable()
      })
    }


  }


  ngOnDestroy(){
    if(this.sus){
      this.sus.unsubscribe()
    }
  }
}
