import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trial-list-component',
  templateUrl: './app.component.trial.list.html',
  styleUrls: ['./app.component.trial.list.scss']
})

export class TrialList {
  @Input() trials: Array<Object>;
}
