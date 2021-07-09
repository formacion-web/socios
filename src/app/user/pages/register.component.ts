import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'acme-register',
  template: `<reg-form [formGroup]='formGroup'
  (submitEvt)=registerUser($event)></reg-form>`
})
export class RegisterComponent implements OnInit {

  user!:User;
  formGroup!:FormGroup;
  constructor(private fb:FormBuilder,
              private authService: AuthService,
              private router: Router) { 
    this.user = new User();

  }

  registerUser(user:User){
    this.authService.registerUser$(user).subscribe(data => 
      {console.log(data)
      this.authService.setToken(data.accessToken);
      this.router.navigate(['/socio'])});
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
