import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'acme-socio',
  template: `
  <acme-header></acme-header>
  <socio-form ></socio-form>`
})
export class SocioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
