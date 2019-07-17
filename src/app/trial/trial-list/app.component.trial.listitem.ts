import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trial-listitem-component',
  templateUrl: './app.component.trial.listitem.html',
  styleUrls: ['./app.component.trial.listitem.scss']
})

export class TrialListItem {
  @Input() trial: Object;
}
