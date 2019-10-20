import { Component } from '@angular/core';
import { Diary_Entry, Diary } from './Models/Diary_Model';
import { AngularFireDatabase, AngularFireList, listChanges } from 'angularfire2/database'
import { Router, NavigationStart, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Cancer Fighter';
  diary: Diary;
  todo$: any[];

  constructor(private db: AngularFireDatabase, private router: Router) {
    this.diary = new Diary();
    var user_data;
    this.todo$ = [];

    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
          //$('#navbarToggleExternalContent').collapse("hide");
          console.log(window.location.pathname)
        });
}


  ngOnInit(){
  }
}
