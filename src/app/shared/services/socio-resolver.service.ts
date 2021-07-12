import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Socio } from '../model/socio';
import { SocioService } from './socio.service';

@Injectable({
  providedIn: 'root'
})
export class SocioResolverService implements Resolve<Socio> {

  constructor(private socioService: SocioService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Socio> | Observable<never> {

    return this.socioService.getSocio$().pipe(
      take(1))

  }}
