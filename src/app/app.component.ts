import { Component } from '@angular/core';
import { Diary_Entry, Diary } from './Models/Diary_Model';
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

  constructor(private router: Router) {
    this.diary = new Diary();
    var user_data
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
        //  $('#navbarToggleExternalContent').collapse("hide");
          console.log(window.location.pathname)
        });
  }

  ngOnInit(){
  }

  onNewEntry($event: Diary_Entry){
    this.diary.Entries.push($event);
    console.log(this.diary)
  }
}
