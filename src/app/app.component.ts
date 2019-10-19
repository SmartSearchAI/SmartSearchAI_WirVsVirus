import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Cancer Fighter';

  constructor() {
    var user_data
  }

  ngOnInit(){
  }

  switch_to(id){
    console.log("switch to " + id)
    $("#mstracer-component").addClass("hidden")
    $("#introduction-component").addClass("hidden")
    $("#profile-component").addClass("hidden")
    $("#"+id).removeClass("hidden")

    if( id=="profile-component" ){
      var first_name = localStorage.getItem("first_name");
      var last_name = localStorage.getItem("last_name");
      var birth_date = localStorage.getItem("birth_date");
      var role = localStorage.getItem("role");
      var cancer = localStorage.getItem("cancer");
    }

  }




}
