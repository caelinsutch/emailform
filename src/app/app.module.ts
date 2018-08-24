import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import { ManageEntriesComponent } from './manage-entries/manage-entries.component';
import { ViewEntriesComponent } from './view-entries/view-entries.component';
import {AngularFireModule} from 'angularfire2';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFirestore} from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent,
    ManageEntriesComponent,
    ViewEntriesComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AngularFireModule,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
