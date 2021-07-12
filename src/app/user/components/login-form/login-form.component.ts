import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
@Input() formGroup!: FormGroup;
@Input() error!:string;

@Output() submitEvt = new EventEmitter();

  constructor() { }

  submit(){
    this.submitEvt.emit(this.formGroup.value);
  }
  ngOnInit(): void {
  }
  
}
