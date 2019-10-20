import { Component, OnInit } from '@angular/core';
import {faFrown, faSmile} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  faSmile = faSmile
  faFrown = faFrown
  widgetMode = true
  constructor() { }

  ngOnInit() {
  }
  toggleWidgetMode()
  {
    this.widgetMode = !this.widgetMode
  }
}
