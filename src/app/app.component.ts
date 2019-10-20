import { Component } from '@angular/core';
import { Diary_Entry, Diary } from './Models/Diary_Model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Cancer Fighter';
  diary: Diary;
  constructor() {
    this.diary = new Diary();
    var user_data
  }

  ngOnInit(){
  }

  onNewEntry($event: Diary_Entry){
    this.diary.Entries.push($event);
    console.log(this.diary)
  }

  switch_to(id){

    //hidden wrong modules and opening the correct one
    $("#dashboard-component").addClass("hidden")
    $("#introduction-component").addClass("hidden")
    $("#profile-component").addClass("hidden")
    $("#mood-welcome-component").addClass("hidden")
    $("#hwpl-dashboard-component").addClass("hidden")
    $("#display-diary-component").addClass("hidden")
    console.log(id)
    $("#"+id).removeClass("hidden")

    // loading the data into user profile
    if( id=="profile-component" ){
      var first_name = localStorage.getItem("first_name");
      var last_name = localStorage.getItem("last_name");
      var birth_date = localStorage.getItem("birth_date");
      var role = localStorage.getItem("role");
      var cancer = localStorage.getItem("cancer");

      $("#profile-usertitle-name").html(first_name + " " + last_name)
      $("#profile-role").html(cancer + " " + role)
    }

    $('#navbarToggleExternalContent').collapse('toggle');

  }




}
