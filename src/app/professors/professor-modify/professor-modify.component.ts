import { Professor } from './../interfaces/professor';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProfessorsService } from '../services/professors.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-professor-modify',
  templateUrl: './professor-modify.component.html',
  styleUrls: ['./professor-modify.component.css']
})
export class ProfessorModifyComponent {
  form!:FormGroup
  sus?:Subscription
  profesorId!:number
  professor:Professor | object= {}
  mode : 'create'| 'update' = 'create'
  constructor(private fb:FormBuilder , private _ProfessorsService:ProfessorsService , private _ActivatedRoute:ActivatedRoute , private router:Router){
    this.form = fb.group({
      name: ['', [Validators.required]],
      surname: ['',  [Validators.required]],
      description: ['',  [Validators.required]]
    })

  }
  ngOnInit(){
    this.profesorId = parseInt (this._ActivatedRoute.snapshot.params["id"]);
    if(this.profesorId != 0){
      this.sus = this._ProfessorsService.getProfessorById(this.profesorId).subscribe(res=>{
        delete res.id;
        delete res.active;
        this.mode = 'update'
        this.form.setValue(res)
      })
    }

  }
  next(){
    const student:Professor = this.form.value
    if(this.mode == 'create'){
      this.sus = this._ProfessorsService.addProfessor(student).subscribe(data=>{
        alert("profesor creado correctamente")
        this.router.navigate(['professors'])
      })
    }else if(this.mode == 'update'){
      this.sus = this._ProfessorsService.updateProfessor(this.profesorId,student).subscribe(data=>{
        alert("profesor actualizado correctamente")
        this.router.navigate(['professors'])
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
