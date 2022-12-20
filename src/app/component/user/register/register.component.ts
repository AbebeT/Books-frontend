import { Router } from '@angular/router';
import { UserRegister } from './../../../model/regist.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl(''),
    agree: new FormControl(false)
  });

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(value: UserRegister){
    console.log("value ", value);
    this.registerForm.reset();
    this.router.navigate(["/login"]);

    
  }

}
