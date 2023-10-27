import { Course } from './../interfaces/course';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-courses-card-to-add',
  templateUrl: './courses-card-to-add.component.html',
  styleUrls: ['./courses-card-to-add.component.css'],
})
export class CoursesCardToAddComponent {
  @Output() createCourse = new EventEmitter<Course>();
  @Output() editCourse = new EventEmitter<Course>();
  @Input() InputCourse!: Course;


  course!:Course
  mode: 'create' | 'edit' = 'create';
  ngOnInit() {
    if (this.InputCourse) {
      this.mode = 'edit';
      this.course = this.InputCourse
    } else {
      this.course = {
        professor: 'profesor',
        title: 'titulo',
        description: 'descripción',
        modality: 'virtual',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6YEtxN86Z0g_Pf35HiiY2KZsCBM23ZIG-w&usqp=CAU',
      };
    }

  }

  ngOnChanges(){
    if (this.InputCourse) {
      this.mode = 'edit';
      this.course = this.InputCourse
    } else {
      this.course = {
        professor: 'profesor',
        title: 'titulo',
        description: 'descripción',
        modality: 'virtual',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6YEtxN86Z0g_Pf35HiiY2KZsCBM23ZIG-w&usqp=CAU',
      };
    }

  }
  cancel(){
    this.mode = 'create'
    this.course = {
      professor: 'profesor',
      title: 'titulo',
      description: 'descripción',
      modality: 'virtual',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6YEtxN86Z0g_Pf35HiiY2KZsCBM23ZIG-w&usqp=CAU',
    };
    this.editedDesc = '';
    this.editedProfessor = '';
    this.editedTitle = '';

  }
  isEditing = false;
  isEditingDesc = false;
  editedTitle = '';
  editedProfessor = '';
  editedDesc = '';

  toggleEdit() {
    this.isEditing = !this.isEditing;
    this.editedTitle = this.course.title;
    this.editedProfessor = this.course.professor;
    this.toggleEditDesc();
  }
  toggleEditDesc() {
    this.isEditingDesc = !this.isEditingDesc;
    this.editedDesc = this.course.description;
  }

  saveDesc() {
    this.course.description = this.editedDesc;
    //this.isEditingDesc = !this.isEditingDesc;
  }
  switchModality() {
    if (this.course.modality == 'presencial') this.course.modality = 'virtual';
    else if (this.course.modality == 'virtual')
      this.course.modality = 'presencial';
    else this.course.modality = 'virtual';
  }
  save() {
    if (this.editedTitle != '') this.course.title = this.editedTitle;
    if (this.editedProfessor != '')
      this.course.professor = this.editedProfessor;

    this.isEditing = false;
    this.isEditingDesc = false;
    if (this.editedDesc != '') {
      this.saveDesc();
    }
  }
  ChangeImage() {
    const newUrl = window.prompt('ingrese url de la imagen');
    if (newUrl) this.course.img = newUrl;
  }
  create() {
    this.save();
    if (
      this.course.title == 'titulo' ||
      this.course.professor == 'profesor' ||
      this.course.description == 'descripción'
    ) {
      alert('debe modificar los campos titulo , profesor y descripción');
    } else {
      this.createCourse.emit(this.course);
      this.course = {
        professor: 'profesor',
        title: 'titulo',
        description: 'descripción',
        modality: 'virtual',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6YEtxN86Z0g_Pf35HiiY2KZsCBM23ZIG-w&usqp=CAU',
      };
      this.editedDesc = '';
      this.editedProfessor = '';
      this.editedTitle = '';
      this.mode = 'create'
    }
  }
  edit(){
    this.save();
    if (
      this.course.title == 'titulo' ||
      this.course.professor == 'profesor' ||
      this.course.description == 'descripción'
    ) {
      alert('debe modificar los campos titulo , profesor y descripción');
    } else {
      this.editCourse.emit(this.course);
      this.mode = 'create'
      this.course = {
        professor: 'profesor',
        title: 'titulo',
        description: 'descripción',
        modality: 'virtual',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6YEtxN86Z0g_Pf35HiiY2KZsCBM23ZIG-w&usqp=CAU',
      };
      this.editedDesc = '';
      this.editedProfessor = '';
      this.editedTitle = '';

    }
  }
}
