import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { EntryService } from '../entry.service';
import {entry} from '../entry.model';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

@Component({
  selector: 'app-manage-entries',
  templateUrl: './manage-entries.component.html',
  styleUrls: ['./manage-entries.component.css']
})
export class ManageEntriesComponent implements OnInit {

  postForm: FormGroup;
  postsCollection: AngularFirestoreCollection<entry>;
  posts$: Observable<entry[]>;

  constructor(private entryService: EntryService, afs: AngularFirestore) {
    this.postsCollection = afs.collection<entry>('posts$');
    this.posts$ = this.postsCollection.valueChanges();
  }

  ngOnInit() {
    this.postForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });

    this.posts$ = this.entryService.getCollection$('entries');
  }

  save() {
    const firstName = this.postForm.get('firstName').value;
    const lastName = this.postForm.get('lastName').value;
    const email = this.postForm.get('email').value;

    // Save to firebase
    this.entryService.add({firstName, lastName, email});

    console.log('Saved');
    console.log(this.posts$);
    console.log(this.postsCollection);
  }

  // Removes on provided id
  remove(id: string) {
    this.entryService.remove(id);
  }

}
