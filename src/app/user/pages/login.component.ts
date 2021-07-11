import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acme-login',
  template: '<login-form [formGroup]=formGroup></login-form>',
  styles:[]
})
export class LoginComponent implements OnInit {
formGroup!:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email:'',
      password:''
    })
  }

}
