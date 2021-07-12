import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SociosRoutingModule } from './socio-routing.module';

import { SocioComponent } from './pages/socio.component';
import { SocioFormComponent } from './components/socio-form/socio-form.component';
import { ComponentsModule } from '../shared/components/components.module';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SocioComponent,
    SocioFormComponent
  ],
  imports: [
    CommonModule,
    SociosRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SociosModule { }
