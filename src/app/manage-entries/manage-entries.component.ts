import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-manage-entries',
  templateUrl: './manage-entries.component.html',
  styleUrls: ['./manage-entries.component.css']
})
export class ManageEntriesComponent implements OnInit {

  postForm: FormGroup;

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.postForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  save() {
    const firstName = this.postForm.get('firstName').value;
    const lastName = this.postForm.get('lastName').value;
    const email = this.postForm.get('email').value;

    // Save to firebase
    this.entryService.add({firstName, lastName, email});

    console.log("Saved");
  }

}
