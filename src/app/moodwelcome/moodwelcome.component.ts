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
  }

  ngOnInit() {
  }

  onSubmit(){
    var DateObj = new Date();
<<<<<<< HEAD
    var myDate = ('0' + DateObj.getDate()).slice(-2) + "-" + ('0' + (DateObj.getMonth() + 1)).slice(-2)  + "-" +  DateObj.getFullYear().toString().slice(-2);
    this.diary_entry.Date = myDate
    this.diary_entry.HWPL_Text = $("#HWPL_Text").val()
    this.entryOutput.emit(this.diary_entry);
=======
    var myDate = DateObj.getFullYear() + '-' + ('0' + (DateObj.getMonth() + 1)).slice(-2) + '-' + ('0' + DateObj.getDate()).slice(-2);
    this.entry.Date= new Date();
    this.entry.HWPL_Text = $("#HWPL_Text").val()
    this.entryOutput.emit(this.entry);
>>>>>>> 1426e8c0233920739c20c611602c7b2bc3b5495f
    $("#mood-welcome-component").addClass("hidden")
    $("#dashboard-component").removeClass("hidden")
  }

  onChangeValue(target: String){
    console.log("Change " + target)
    let x = event.clientX;     // Get the horizontal coordinate
    var val = (x-137)/203*100;
<<<<<<< HEAD
    this.diary_entry.HWPL_Value[target] = val.toString().slice(0,2);
=======
    this.entry.HWPL_Value[target] = val;
>>>>>>> 1426e8c0233920739c20c611602c7b2bc3b5495f
  }


  click_cold(){
    $("#cold_face").removeClass("selected")
    $("#sick_face").removeClass("selected")
    $("#happy_face").removeClass("selected")
    $("#super_face").removeClass("selected")
    $("#cold_face").addClass("selected")
    this.entry.Mood = 1
    localStorage.setItem('smiley', "cold");
  }

  click_sick(){
    $("#cold_face").removeClass("selected")
    $("#sick_face").removeClass("selected")
    $("#happy_face").removeClass("selected")
    $("#super_face").removeClass("selected")
    $("#sick_face").addClass("selected")
    this.entry.Mood = 2
    localStorage.setItem('smiley', "sick");
  }


  click_happy(){
    $("#cold_face").removeClass("selected")
    $("#sick_face").removeClass("selected")
    $("#happy_face").removeClass("selected")
    $("#super_face").removeClass("selected")
    $("#happy_face").addClass("selected")
    this.entry.Mood = 3
    localStorage.setItem('smiley', "happy");
  }


  click_super(){
    $("#cold_face").removeClass("selected")
    $("#sick_face").removeClass("selected")
    $("#happy_face").removeClass("selected")
    $("#super_face").removeClass("selected")
    $("#super_face").addClass("selected")
    this.entry.Mood = 4
    localStorage.setItem('smiley', "super");
  }





}
