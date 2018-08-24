import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import { entry } from './entry.model';
import DocumentReference = firebase.firestore.DocumentReference;
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private afs: AngularFirestore) { }
  readonly path = 'entries';

  add(data: entry): Promise<DocumentReference> {
    return this.afs.collection<entry>(this.path).add(data);
  }
}
