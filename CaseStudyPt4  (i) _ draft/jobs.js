//Script - login.js

//Function called when the form is submitted
//Function validates data and returns a Boolean value.

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validationForm(){
  'use strict';

  //Get reference to the form elements:
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var date = document.getElementById("date");
  var experience = document.getElementById("experience");

  //Validate!
  if(name.value.length>0){
    if(/^[A-Za-z\s]+$/.test(name)){
      return true;
    }
    else {
      alert("Please enter your name with only alphabet characters and character spaces.");
      return false;
    }
  }
  if(email.value.length>0){
    if(validateEmail(email)){
      return true;
    }
    else{
      alert("The email field should only contain user name part follows by "@" and a domain name part.");
      return false;
    }
  }
  if(date.value.length>0){
      var now = new Date();
      var stryear = date.substring(6);
      var strmth = date.substring(0,2);
      var strday = date.substring(5,3);
      var stdate = new Date(stryear,strmth,strday);

      var datediff = (stdate  - now)/864e5;

      if(datediff <= 0){
        alert("Start date can NOT be from today and the past!")
        return false;
      }else {
        return true;
      }
  }
  if(experience.value.length>0){
    return true;
  }else {
    alert("The experience field can NOT be empty.");
    return false;
  }
}

 //   /^[A-Za-z\s]+$/.test(x) test for alphabet


//Function called when the window has been loaded.
//Function needs to add an event listener to the form.
function init(){
  'use strict';

  //Confirm that document.getElementById() can be used:
  if(document && document.getElementById){
    var loginForm = document.getElementById("loginForm");
    loginForm.onsubmit = validationForm;
  }
}//End of init() function.

//Assign an event listener to the window's load event:
window.onload = init;
