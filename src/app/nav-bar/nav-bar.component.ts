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
    localStorage.removeItem('token')
    this.router.navigate(['auth'])
  }

  isLoged():boolean{
    const token = localStorage.getItem('token')
    return !!token;
  }
}
