import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User {
  uid: string;
  email: string;
  nama: string;
  prodi: string;
  semester: number;
  skills: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersCollection: AngularFirestoreCollection<User>;
  private users: Observable<User[]>;

  private user: User;

  constructor(db: AngularFirestore) { 
    this.usersCollection = db.collection<User>('users');

    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data};
        });
      })
    );
  }

  getUsers(){
    return this.users;
  }

  getUser(id){
    return this.usersCollection.doc<User>(id).valueChanges();
  }

  updateUser(user: User, id: string) {
    return this.usersCollection.doc(id).update(user);
  }

  setUser(user: User){
    this.user = user;
  }

  getUserID(){
    return this.user.uid;
  }

  getUserName(){
    return this.user.nama;
  }
  
}
