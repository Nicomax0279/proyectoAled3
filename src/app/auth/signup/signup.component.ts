import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form: FormGroup;
  loading = false;
roles:string[] = ['user', 'admin']
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _authService: AuthService
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  signup(){
    const user = this.form.value
    this._authService.signup(user).subscribe(e=>{
      alert('cuenta creada correctamente')
      this.router.navigate([''])

    })

  }
}
