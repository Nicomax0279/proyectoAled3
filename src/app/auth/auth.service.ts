import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { loginUser } from './interfaces/loginUser';
export interface User{
  id?:number;
  username:string;
  password:string;
  token:string;
}
const adminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.i2Yu8oHEvYGuQ_zRiMwE9fU88ATGUypglUbmmX0xz80"
const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwicm9sZSI6InVzZXIiLCJpYXQiOjE1MTYyMzkwMjJ9.G1RyAWVQhs73owf6c23l7bpZzlwe-nfAlz3NoDB_cVo"
const key = 'KEY'
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() {}


  login(user:loginUser):Observable<User>{
    console.log(user)
  const foundUser = this.users.find(u => user.username == u.username)
  console.log(this.users)
  if(!foundUser) throw new Error('username not found error')
  if(foundUser.password != user.password)  throw new Error('credentials error')
  return of({...foundUser})

  }


  users:User[] = [
    {id:1 ,username:'11@11',password:'11',token:adminToken},
    {id:1 ,username:'22@22',password:'22',token:userToken}
  ]

}
