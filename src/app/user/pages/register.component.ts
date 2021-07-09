import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'acme-register',
  template: `<reg-form 
  [formGroup]='formGroup'
  [error]=error
  (submitEvt)=registerUser($event)></reg-form>`
})
export class RegisterComponent implements OnInit {

  error!:string;
  user!:User;
  formGroup!:FormGroup;
  constructor(private fb:FormBuilder,
              private authService: AuthService,
              private router: Router) { 
    this.user = new User();

  }

  registerUser(user:User){
    this.authService.registerUser$(user).subscribe(data => 
      {
     console.log('user registered',data)
      this.authService.setToken(data.accessToken);
      this.router.navigate(['/socio'])},error => {
        this.formGroup.controls['email'].setErrors({'incorrect': true})
        console.log('component',error)
        this.error = error;
      })
    //todo: conectar con el Service de authentication
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group(this.user);
    // console.log(this.user)
    Object.keys(this.formGroup.controls).map(ctrl =>{

      if(ctrl==='email'){
        this.formGroup.controls[ctrl].setValidators([Validators.required,Validators.email])
      } else{
      this.formGroup.controls[ctrl].setValidators(Validators.required)}
      //  console.log(this.formGroup);
    })
  }

}
