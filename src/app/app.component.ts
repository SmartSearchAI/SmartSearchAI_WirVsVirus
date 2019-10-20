import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Cancer Fighter';

  constructor(private router: Router) {
    var user_data
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
          $('#navbarToggleExternalContent').collapse("hide");
          console.log(window.location.pathname)
        });
  }

  ngOnInit(){
  }
}
