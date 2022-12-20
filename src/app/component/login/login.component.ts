import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/model/login';
import { Store } from '@ngrx/store';
import { loginAction } from 'src/app/store/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });

  login$: Observable<{}>

  

  constructor(private store: Store<{login: {isLoggedIn : number}}>) { 
    this.login$ = store.select('login');

  }

  ngOnInit(): void {
  }

  onSubmit(value: Login ){
    this.store.dispatch(loginAction());
  }

}
