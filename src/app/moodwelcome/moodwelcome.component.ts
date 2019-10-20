import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import { Diary_Entry } from '../Models/Diary_Model';

@Component({
  selector: 'app-moodwelcome',
  templateUrl: './moodwelcome.component.html',
  styleUrls: ['./moodwelcome.component.scss']
})
export class MoodwelcomeComponent implements OnInit {
  @Output() entryOutput = new EventEmitter<Diary_Entry>();
  entry: Diary_Entry;
  constructor() {
    this.entry = new Diary_Entry();
    this.init_x = 137;
    this.end_x = 340;
    this.bar_value_1 = 50;
    this.bar_value_2 = 50;
    this.bar_value_3 = 50;
    this.bar_value_4 = 50;
  }

  ngOnInit() {
  }
  onSubmit(){
    this.entryOutput.emit(this.entry);
  }
  change_liabilities(){
    console.log("Change Liabilities")
    let x = event.clientX;     // Get the horizontal coordinate
    var val = (x-137)/203*100;
    this.bar_value_1 = val;
    localStorage.setItem('bar_value_1', val);
  }

  change_health(){
    console.log("Change Health")
    let x = event.clientX;     // Get the horizontal coordinate
    var val = (x-137)/203*100;
    this.bar_value_2 = val;
    localStorage.setItem('bar_value_2', val);
  }

  change_fun(){
    console.log("Change Fun")
    let x = event.clientX;     // Get the horizontal coordinate
    var val = (x-137)/203*100;
    this.bar_value_3 = val;
    localStorage.setItem('bar_value_2', val);
  }

  change_love(){
    console.log("Change Love")
    let x = event.clientX;     // Get the horizontal coordinate
    var val = (x-137)/203*100;
    this.bar_value_4 = val;
    localStorage.setItem('bar_value_4', val);
  }

  click_cold(){
    $("#cold_face").removeClass("selected")
    $("#sick_face").removeClass("selected")
    $("#happy_face").removeClass("selected")
    $("#super_face").removeClass("selected")
    $("#cold_face").addClass("selected")
    localStorage.setItem('smiley', "cold");
  }

  click_sick(){
    $("#cold_face").removeClass("selected")
    $("#sick_face").removeClass("selected")
    $("#happy_face").removeClass("selected")
    $("#super_face").removeClass("selected")
    $("#sick_face").addClass("selected")
    localStorage.setItem('smiley', "sick");
  }


  click_super(){
    $("#cold_face").removeClass("selected")
    $("#sick_face").removeClass("selected")
    $("#happy_face").removeClass("selected")
    $("#super_face").removeClass("selected")
    $("#super_face").addClass("selected")
    localStorage.setItem('smiley', "super");
  }


  click_happy(){
    $("#cold_face").removeClass("selected")
    $("#sick_face").removeClass("selected")
    $("#happy_face").removeClass("selected")
    $("#super_face").removeClass("selected")
    $("#happy_face").addClass("selected")
    localStorage.setItem('smiley', "happy");
  }



}
