import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { Socio } from '../model/socio';

@Injectable({
  providedIn: 'root'
})
export class FireSocioService {

  constructor(private firestore:AngularFirestore) { }

  getByUserID$(id:string):Observable<Socio[]>{
    return this.firestore.collection<Socio>('socios', ref=> 
    ref.where('userID', '==', id)).valueChanges().pipe(
      tap(data =>{console.log(data); return data}),
      first());
  }
}
