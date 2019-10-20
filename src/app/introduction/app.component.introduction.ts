import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction-component',
  templateUrl: './app.component.introduction.html',
  styleUrls: ['./app.component.introduction.scss']
})
export class IntroductionComponent implements OnInit {

  constructor() {

    this.data = {
      "role":""
    }

  }

  ngOnInit() {
  }


  //////////////////////////////////////
  // Processing the click on the who-i-am button
  who_i_am_button(user_role){

    var new_message = "";

    this.data["role"] = user_role;
    $("#who-are-you-buttons").addClass("hidden")

    if( user_role=="patient" ){
      $("#which-disease-buttons").removeClass("hidden")
      new_message = "Which desease do you have?"
    }else if( user_role=="doctor" ){
      $("#which-disease-buttons").removeClass("hidden")
      new_message = "Whats your affiliation?"
    }else if( user_role=="partner" ){
      $("#which-disease-buttons").removeClass("hidden")
      new_message = "Which desease do you have?"
    }else{
      $("#which-disease-buttons").removeClass("hidden")
      new_message = "Whatever"
    }

    $("#title-message").html(new_message)

  }


  //////////////////////////////////////
  // Processing the click on the which-cancer button
  process_cancer_button(cancer){

    $("#welcome-message").addClass("hidden")
    var new_message = "Introduce your data";
    $("#title-message").html(new_message)

    this.data["cancer"] = cancer;
    console.log(this.data)
    $("#which-disease-buttons").addClass("hidden")
    $("#profile").removeClass("hidden")


  }


  //////////////////////////////////////
  // Processing the click on the which-cancer button
  on_submit(){

    var first_name = $("#first_name").val();
    var last_name = $("#last_name").val();
    var birth_date = $("#birth_date").val();
    this.data["first_name"] = first_name
    this.data["last_name"] = last_name
    this.data["birth_date"] = birth_date
    console.log(this.data)

    localStorage.setItem('role', this.data["role"]);
    localStorage.setItem('cancer', this.data["cancer"]);
    localStorage.setItem('first_name', this.data["first_name"]);
    localStorage.setItem('last_name', this.data["last_name"]);
    localStorage.setItem('birth_date', this.data["birth_date"]);

  }



}

//
