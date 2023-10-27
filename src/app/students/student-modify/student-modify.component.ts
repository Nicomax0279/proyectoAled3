import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../interfaces/student';
import { StudentService } from '../services/student.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-student-modify',
  templateUrl: './student-modify.component.html',
  styleUrls: ['./student-modify.component.css']
})
export class StudentModifyComponent {
form!:FormGroup
sus?:Subscription
studentId!:number
student:Student | object= {}
careers:string[] = ['analista de sistemas', 'diseño' , 'administración de empresas' ]
mode : 'create'| 'update' = 'create'
constructor(private fb:FormBuilder , private _studentService:StudentService , private _ActivatedRoute:ActivatedRoute , private router:Router){
  this.form = fb.group({
    name: ['', [Validators.required]],
    surname: ['',  [Validators.required]],
    career: ['',  [Validators.required]],
    year: ['',  [Validators.required]],
    birthdate: ['',  [Validators.required]],
    email: ['',[ Validators.required , Validators.email]],
    phoneNumber: ['',  [Validators.required]],
    address: ['',  [Validators.required]],




  })

}
ngOnInit(){
  this.studentId = parseInt (this._ActivatedRoute.snapshot.params["id"]);
  if(this.studentId != 0){
    this.sus = this._studentService.getStudentById(this.studentId).subscribe(res=>{
      delete res.id;
      delete res.active;
      this.mode = 'update'
      this.form.setValue(res)
    })
  }

}
next(){
  const student:Student = this.form.value
  if(this.mode == 'create'){
    this.sus = this._studentService.addStudent(student).subscribe(data=>{
      alert("estudiante creado correctamente")
      this.router.navigate(['students'])
    })
  }else if(this.mode == 'update'){
    this.sus = this._studentService.updateStudent(this.studentId,student).subscribe(data=>{
      alert("estudiante creado correctamente")
      this.router.navigate(['students'])
    })
  }


}
modeToSpanish(mode:'create'| 'update'){
  if(mode === 'create') return "Crear"
  if(mode === 'update') return "Actualizar"
  else return 'error'
}

ngOnDestroy(){
  if(this.sus){
    this.sus.unsubscribe()
  }
}

}
