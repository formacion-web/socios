import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  constructor(private fireAuth: AngularFireAuth,
              private firestore: AngularFirestore) { }

async  register(user:User): Promise<any>{
  try {
    
    const credentials = await this.fireAuth.createUserWithEmailAndPassword(user.email,user.password);
    user.id = credentials.user?.uid;
    credentials.user?.updateProfile({
      displayName: user.name +' '+user.surname,
      photoURL:'http://mifoto.com'
    })
      // return  this.firestore.collection<User>('users').doc(user.id).set(user);
    }
   catch (error) {
     console.log(error);
    throw error; 
    
  }
}

login(user:User):Promise<any>{
  return this.fireAuth.signInWithEmailAndPassword(user.email,user.password);
}

setToken(id:any,token:any):void{
  sessionStorage.setItem(id,token);
}
getToken():string{
  return sessionStorage.getItem('accessToken') as string;
}
}