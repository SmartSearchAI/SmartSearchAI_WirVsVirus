import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cm-calender',
  templateUrl: './cm.calender.component.html',
  styleUrls: ['./cm.calender.component.scss']
})

export class CMCalenderComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    document.getElementById('gcalender').src = "https://calendar.google.com/calendar/embed?src=st2qscfo8b7e6e5ptbdld9rn20%40group.calendar.google.com&ctz=Europe%2FBerlin";
  }

}
