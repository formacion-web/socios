import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './pages/login.component';
import { RegisterComponent } from './pages/register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterFormComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
