import { Component, OnInit} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-infoslider',
  templateUrl: './infoslider.component.html',
  styleUrls: ['./infoslider.component.scss']
})
export class InfosliderComponent implements OnInit {
  slideNumber : number;

  constructor() {this.slideNumber=1 }

  ngOnInit() {
    interval(5000)
    .subscribe((val) => { this.changeNumber() });
  }

  changeNumber()
  {
      this.slideNumber++;

      if(this.slideNumber>4)
      {
        this.slideNumber=1
      }
  }

}
