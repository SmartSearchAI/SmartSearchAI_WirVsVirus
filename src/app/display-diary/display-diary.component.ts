import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-diary',
  templateUrl: './display-diary.component.html',
  styleUrls: ['./display-diary.component.scss']
})
export class DisplayDiaryComponent implements OnInit {

  @Input() diary

  constructor() {
   }


  ngOnInit() {
  }

  open_diary_entry(event){
    console.log(event)
  }



}
