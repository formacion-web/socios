import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from '../shared/guards/auth.guard';

import { SocioComponent } from './pages/socio.component';

const routes: Routes = [
  {path:':id',component:SocioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SociosRoutingModule { }
