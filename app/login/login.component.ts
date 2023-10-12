import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name="";
  loginform!:FormGroup;

  constructor(private route:Router,private formbuilder:FormBuilder){}
  ngOnInit():void{
    this.loginform = this.formbuilder.group({
      email:new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(30),
        Validators.pattern('[a-z],[A-Z],@,[0-9]')
      ])),
      password:new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
        Validators.pattern('[a-z],[A-Z]@,$,[0-9]')
      ]))
    })
  }
  login() {
    this.route.navigateByUrl('/home')
  }
}
