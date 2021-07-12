import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'acme-login',
  template: `<login-form [formGroup]='formGroup'
                         (submitEvt)=loginUser($event)>
             </login-form>`
})
export class LoginComponent implements OnInit {

  user!:User;
  formGroup!:FormGroup;
  constructor(private fb:FormBuilder) {
    this.user = new User();

  }

  loginUser(user:User){

    console.log(user);
    //todo: conectar con el Service de authentication
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group(this.user);
    // console.log(this.user)
    Object.keys(this.formGroup.controls).map(ctrl =>{
      this.formGroup.controls[ctrl].setValidators(Validators.required)
      //  console.log(this.formGroup);
    })
  }

}
