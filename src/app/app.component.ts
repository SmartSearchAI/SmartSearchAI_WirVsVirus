import { Component } from '@angular/core';
import {TrialSourceService} from './services_global/trialsource.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  $Title = 'CAMA-MODULE-EXAMPLE-ClinicalTrials';
  $Service: TrialSourceService;
  constructor(private myService: TrialSourceService ) {

  }
  ngOnInit() {
  }

}
