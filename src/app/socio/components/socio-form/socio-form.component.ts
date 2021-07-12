import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'socio-form',
  templateUrl: './socio-form.component.html',
  styleUrls: ['./socio-form.component.scss']
})
export class SocioFormComponent implements OnInit {

  @Input() formGroup!:FormGroup;
  @Input() error!:any;
  @Output() submitEvt = new EventEmitter();

  constructor() {
    console.log(this.formGroup?.value)
   }

  
  submit(){
    this.submitEvt.emit(this.formGroup.value);
    this.formGroup.reset(); 
  }

  ngOnInit(): void {
  }
}
