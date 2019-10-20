import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFireDatabase, AngularFireList, listChanges } from 'angularfire2/database';

@Component({
  selector: 'lifestyle-component',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.scss']
})
export class LifestyleComponent implements OnInit {
  todos$: any[];

  constructor(private db: AngularFireDatabase) {
    db.list('/books')
      .valueChanges()
      .subscribe((list) => {
        this.todos$ = list;
        console.log('Values Received ' + list.length);
        console.log(this.todos$);
      });
  }

  ngOnInit() {
    this.todos$ = [];
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
  }
}
