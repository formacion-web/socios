import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
@Input() formGroup!: FormGroup;
@Input() error!:string;

  constructor() { }

  ngOnInit(): void {
  }
  submit(){}
}
