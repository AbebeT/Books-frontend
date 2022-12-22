import { logoutAction } from './../../store/login.actions';
import { UserService } from './../../service/user.service';
import { CurrentLoginState } from './../../store/login.selector';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/model/login';
import { Store } from '@ngrx/store';
import { loginAction } from 'src/app/store/login.actions';
import { User } from 'src/app/model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login$: Observable<{}>;
  returnValue: User;
  isUserLoggedIn: boolean = true;

  constructor(
    private store: Store<{ isLoggedIn: { isLoggedIn: boolean } }>,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogin(loginDetails: Login) {
    this.userService.login(loginDetails).subscribe((data) => {
      this.returnValue = data;
      if (this.returnValue?.password === loginDetails.password) {
        this.store.dispatch(loginAction());
    
        this.form.reset();
        this.router.navigate(['/books']);
      } else {
        this.isUserLoggedIn = false;
        this.store.dispatch(logoutAction());
      }
    });
  }
}
