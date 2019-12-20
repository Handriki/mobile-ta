import { Injectable } from '@angular/core';
import {AngularFirestoreCollection, AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Project{
  nama: string
  title: string;
  details: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsCollection: AngularFirestoreCollection<Project>;
  private projects: Observable<Project[]>;


  constructor(db: AngularFirestore) {
    this.projectsCollection = db.collection<Project>('project');

    this.projects = this.projectsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data};
        });
      })
    );
  }

  getProjects(){
    return this.projects;
  }

  getProject(id){
    return this.projectsCollection.doc<Project>(id).valueChanges();
  }

  updateProject(project: Project, id: string){
    return this.projectsCollection.doc(id).update(project);
  }

  addProject(project: Project){
    return this.projectsCollection.add(project);
  }

  removeProject(id){
    return this.projectsCollection.doc(id).delete();
  }
}
