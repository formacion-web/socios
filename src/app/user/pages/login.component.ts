import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/shared/model/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'acme-login',
  template: `<login-form [formGroup]='formGroup'
                         (submitEvt)=loginUser($event)>
             </login-form>`
})
export class LoginComponent implements OnInit {

  user!:User;
  formGroup!:FormGroup;
  constructor(private fb:FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.user = new User();

  }

  loginUser(user:User){
    this.authService.loginUser$(user).subscribe(data =>
      {
      console.log('user logged',data)
      this.authService.setToken(data.accessToken);
      this.router.navigate(['/socio'])},error => {
      
        console.log(error);
      })
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
