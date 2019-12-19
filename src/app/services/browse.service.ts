import { Injectable } from '@angular/core';
import {AngularFirestoreCollection, AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Browse{
  nama: string
  title: string;
  details: string;
}

@Injectable({
  providedIn: 'root'
})
export class BrowseService {


  private browsesCollection: AngularFirestoreCollection<Browse>;
  private browses: Observable<Browse[]>;


  constructor(db: AngularFirestore) {
    this.browsesCollection = db.collection<Browse>('browse');

    this.browses = this.browsesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data};
        });
      })
    );
  }

  getBrowses(){
    return this.browses;
  }

  getBrowse(id){
    return this.browsesCollection.doc<Browse>(id).valueChanges();
  }

  updateBrowse(browse: Browse, id: string){
    return this.browsesCollection.doc(id).update(browse);
  }

  addBrowse(browse: Browse){
    return this.browsesCollection.add(browse);
  }

  removeBrowse(id){
    return this.browsesCollection.doc(id).delete();
  }
}
