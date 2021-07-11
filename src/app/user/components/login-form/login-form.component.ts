<<<<<<< HEAD
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
=======
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

>>>>>>> 51b0f101bf1b6360bbdbcfab753377949a18bc7d

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
@Input() formGroup!: FormGroup;
@Input() error!:string;

  @Input() formGroup!:FormGroup;
  @Output() submitEvt = new EventEmitter();

  constructor() { }

  submit(){
    this.submitEvt.emit(this.formGroup.value);
  }
  ngOnInit(): void {
  }
  submit(){}
}
