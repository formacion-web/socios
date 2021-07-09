import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'reg-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  @Input() formGroup!:FormGroup;
  @Output() submitEvt = new EventEmitter();

  constructor() { }

  submit(){
    this.submitEvt.emit(this.formGroup.value);
  }
  ngOnInit(): void {
  }

}
