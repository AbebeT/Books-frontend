import { User } from './../../../model/user.model';
import { UserService } from './../../../service/user.service';
import { Router } from '@angular/router';
import { UserRegister } from '../../../model/register.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User;
  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    // repeatPassword: new FormControl(''),
    agree: new FormControl(false),
  });

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit(value: UserRegister) {
    if (value.agree) {
      this.userService
        .createUser(value)
        .subscribe((data) => (this.user = data));
      this.registerForm.reset();
      this.router.navigate(['/login']);
    }
  }
}
