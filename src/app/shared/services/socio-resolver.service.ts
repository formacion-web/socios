import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { Socio } from '../model/socio';
import { SocioService } from './socio.service';

@Injectable({
  providedIn: 'root'
})
export class SocioResolverService implements Resolve<Socio> {

  constructor(private socioService: SocioService) { }

  resolve(){

    return this.socioService.getSocio$().pipe(
      take(1),
      catchError((error)=>{
        console.log(error)
        return of(error.error)}))

  }}
