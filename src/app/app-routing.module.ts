import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { SocioResolverService } from './shared/services/socio-resolver.service';
import { LoginComponent } from './user/pages/login.component';
import { RegisterComponent } from './user/pages/register.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'register', component:RegisterComponent},
  {path:'socio', 
      loadChildren: () => import('./socio/socio.module').then(m => m.SociosModule),
      // canLoad:[AuthGuard],
      // resolve: {socio: SocioResolverService}
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
