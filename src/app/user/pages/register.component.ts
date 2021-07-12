import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
=======
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, ValidationErrors, FormControl } from '@angular/forms';
>>>>>>> aa4c7b3f92408406905134170aae9c20940670b9
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

  passwordValidator(): ValidatorFn {

    return (ctrl: AbstractControl): ValidationErrors | null =>
       this.formGroup.get('password')?.value !== ctrl?.value?{mismatch: true}:null;
}


  ngOnInit(): void {
    //versión no tan intuitiva
    this.formGroup = this.fb.group(this.user);
    // console.log(this.user)
    Object.keys(this.formGroup.controls).map(ctrl =>{
      const validators =[Validators.required];
      if(ctrl==='email') validators.push(Validators.email);
      if(ctrl==='confirmPassword')validators.push(this.passwordValidator().bind(this))

      this.formGroup.controls[ctrl].setValidators(validators)

    })
   
  }

}
