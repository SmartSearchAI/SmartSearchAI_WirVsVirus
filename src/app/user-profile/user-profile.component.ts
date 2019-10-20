import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var first_name = localStorage.getItem("first_name");
    var last_name = localStorage.getItem("last_name");
    var birth_date = localStorage.getItem("birth_date");
    var role = localStorage.getItem("role");
    var cancer = localStorage.getItem("cancer");

    $("#profile-usertitle-name").html(first_name + " " + last_name)
    if( role=="patient" ){
      $("#profile-role").html(cancer + " cancer " + role)
    }else{
      $("#profile-role").html(role)
    }
  }

}
