import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Socio } from '../model/socio';
import { AuthService } from './auth.service';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  headers: HttpHeaders = new HttpHeaders({
    'Authorization':`Bearer ${this.authService.getToken()}`
  });
  constructor(private http: HttpClient,
              private authService: AuthService,
              private error: ErrorService) { 
                // this.headers.set('Authorization',`Bearer ${this.authService.getToken()}`);
                console.log(this.headers);
              }
  
  getSocio$(): Observable<Socio>{

    return this.http.get<Socio>(environment.api_url.concat('socios'),
                {headers:this.headers})
                .pipe(
                  tap((data:any) => console.log(data)),
                  catchError(this.error.handleErrors));

  }
}
