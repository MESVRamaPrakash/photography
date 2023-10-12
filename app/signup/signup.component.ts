import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerform!:FormGroup;
  constructor(private formbuilder:FormBuilder){};

  ngOnInit():void {
    this.registerform = this.formbuilder.group({
      username: new FormControl('',Validators.compose([
        Validators.required,
        Validators.maxLength(40),
        Validators.minLength(4),
        Validators.pattern('')
      ])),
        email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.maxLength(20),
        Validators.email,
        Validators.pattern('')
      ])),
        password: new FormControl('',Validators.compose([
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(4),
        Validators.pattern('')
      ]))
    })
  }
 
}
