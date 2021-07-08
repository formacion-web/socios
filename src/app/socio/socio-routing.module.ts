import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SocioComponent } from './pages/socio.component';

const routes: Routes = [
  {path:'',component:SocioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SociosRoutingModule { }
