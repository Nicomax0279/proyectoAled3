import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _authService: AuthService
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }

  login(){
    const user = this.form.value
    this._authService.login(user).subscribe(e=>{
      if(e.token) localStorage.setItem('token',e.token)
      this.router.navigate([''])

    })

  }
}
