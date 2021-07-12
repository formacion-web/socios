import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URI = {
    login:'login',
    register:'register'
  }

  headers: HttpHeaders = new HttpHeaders({
    'Content-type':'application/json'
  })
  constructor(private http: HttpClient,
              private error: ErrorService) { }

  registerUser$(user:User): Observable<any>{
    return this.http.post<User>(environment.api_url.concat(this.URI.register), 
                                user,
                                {headers: this.headers}
                                ).pipe(catchError(this.error.handleErrors))
  }

  loginUser$(user:User): Observable<any>{
    return this.http.post<User>(environment.api_url.concat(this.URI.login), 
                                user,
                                {headers: this.headers}
                                ).pipe(catchError(this.error.handleErrors))
  }

  setToken(token:any):void{
    sessionStorage.setItem('accessToken',token);
  }
  getToken():string{
    return sessionStorage.getItem('accessToken') as string;
  }
  // handleErrors(error: HttpErrorResponse){

  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
    
  //   // Return an observable with a user-facing error message.
  //   return throwError(`${error.error}`);
  // }
}
