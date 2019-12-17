import { Component, OnInit} from '@angular/core';
import {Entity} from '../models/entity';

@Component({
  selector: 'entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})

export class EntityComponent implements OnInit {
  entity: Entity;
  ngOnInit() {
  }
}


