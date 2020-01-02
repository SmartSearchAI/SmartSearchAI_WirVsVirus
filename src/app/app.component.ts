import { Component } from '@angular/core';
import {StudySourceService} from './services_global/study.source.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  $Title = 'CAMA-MODULE-EXAMPLE-ClinicalTrials';
  $Service: StudySourceService;
  constructor(private myService: StudySourceService ) {

  }
  ngOnInit() {
  }

}
