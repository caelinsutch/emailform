import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import { entry } from './entry.model';
import DocumentReference = firebase.firestore.DocumentReference;
import * as firebase from 'firebase';
import {Observable} from 'rxjs';
import {QueryFn} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private afs: AngularFirestore) { }
  readonly path = 'entries';

  add(data: entry): Promise<DocumentReference> {
    return this.afs.collection<entry>(this.path).add(data);
  }

  getCollection$(ref?): Observable<entry[]> {
    return this.afs.collection<entry>(this.path).valueChanges();
  }

  update(id: string, data: Partial<entry>): Promise<void> {
    return this.afs.doc<entry>(`${this.path}/${id}`).update(data);
  }

  remove(id: string): Promise<void> {
    return this.afs.doc<entry>(`${this.path}/${id}`).delete();
  }
}
