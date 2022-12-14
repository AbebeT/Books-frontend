import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/model/login';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value: Login ){

  }

}
