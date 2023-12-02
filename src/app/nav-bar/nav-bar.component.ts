import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private router:Router){}
  logout(){
    console.log('ce')
    localStorage.removeItem('token')
    this.router.navigate(['auth/login'])
  }

  isLoged():boolean{
    const token = localStorage.getItem('token')
    return !!token;
  }
  isAdmin():boolean{
    const token = localStorage.getItem('token')
      if (token) {
        const tokenData = JSON.parse(atob(token.split('.')[1]));
        //console.log(tokenData)
        return tokenData.role === 'admin';
      }else{return false}
  }
}
