import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/shared/model/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FireAuthService } from 'src/app/shared/services/fire-auth.service';

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
              private fireAuthService: FireAuthService,
              private router: Router) {
    this.user = new User();

  }

  async loginUser(user:User){
   const result: any = await this.fireAuthService.login(user);
   const token = await result.user.getIdToken();
   const id = result.user.uid;
   this.fireAuthService.setToken(id,token);
   console.log(result.user);
   this.router.navigate(['/socio/',id]);
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
