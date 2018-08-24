import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {entry} from '../entry.model';
import {EntryService} from '../entry.service';

@Component({
  selector: 'app-view-entries',
  templateUrl: './view-entries.component.html',
  styleUrls: ['./view-entries.component.css']
})
export class ViewEntriesComponent implements OnInit {

  posts$: Observable<entry[]>;

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.posts$ = this.entryService.getCollection$();
  }

}
