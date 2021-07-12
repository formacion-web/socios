import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Socio } from 'src/app/shared/model/socio';
import { SocioService } from 'src/app/shared/services/socio.service';


@Component({
  selector: 'acme-socio',
  template: `
  <acme-header></acme-header>
  <socio-form [formGroup]='formGroup'
  [error]=error
  (submitEvt)=editSocio($event)></socio-form>`
})
export class SocioComponent implements OnInit {

  error!:any;
  socio!: Socio;
  formGroup!: FormGroup;
  constructor(private fb: FormBuilder,
    private socioService: SocioService,
    private router: Router,
    private route: ActivatedRoute) {
    this.socio = new Socio();
    // this.fb.group(this.socio);

  }

  editSocio(socio: Socio){

  }
  ngOnInit() {
    // this.socioService.getSocio$().subscribe(data => {
      this.route.data.subscribe(data => {
      console.log(data);
      this.formGroup = this.fb.group({
        name: data.socio[0].name,
        surname: data.socio[0].surname,
        numeroSocio: data.socio[0].numeroSocio,
        email: data.socio[0].email,
        category: data.socio[0].category})},
      error => {
        if(error.status =='401')
        this.formGroup = this.fb.group(this.socio);
        this.error = error;
        console.log(this.error);
      })
   }

}
