import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  signupUrl!:string;

  constructor(private http:HttpClient) { 
  this.signupUrl="http://localhost:8084/api/user/register";
}
signupok(user:User):Observable<any>{
  return this.http.post(this.signupUrl,user)
}
}
