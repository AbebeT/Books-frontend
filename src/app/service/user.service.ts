import { User } from './../model/user.model';
import { Observable } from 'rxjs';
import { UserRegister } from './../model/register.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "http://localhost:8040/api/users/register";

  constructor(private http: HttpClient) { }

  createUser(user: UserRegister): Observable<User>{
    return this.http.post<User>(this.url, user);
  }

  login(loginDetails: Login): Observable<User>{
    const newUrl = `${this.url}/${loginDetails.email}`
    
    return this.http.get<User>(newUrl);
  }
}
