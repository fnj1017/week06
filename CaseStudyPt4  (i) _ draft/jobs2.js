function chkName(event){

  //Get the target node of the events

  var name = event.currentTarget;

  //Test the format of the input name
  //Allow the spaces after the commas to be optional
  //Allow the period after the initial to be optional

if(/^[A-Za-z\s]+$/.test(name)){
    alert("The name you entered (" + name.value +
          ") is not in the correct form. \n" +
          "The correct form is: " +
          "Last-name, First-name I. \n" +
          "First letters are capitalized");
    name.focus();
    name.select();
    return false;
  }
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function chkEmail(event){
  //Get the target node of the events
  var email = event.currentTarget;

  //Test the format of the input email address
  if (!validateEmail(email)) {
    alert("The email field should only contain user name" +
    "part follows by "@" and a domain name part.");
    email.focus();
    email.select();
    return false;
  }
}


function chkDate(event){
  //Get the target node of the addEventListener
  var date = event.currentTarget;

  var now = new Date();
  var stryear = date.substring(6);
  var strmth = date.substring(0,2);
  var strday = date.substring(5,3);
  var stdate = new Date(stryear,strmth,strday);

  var datediff = (stdate  - now)/864e5;

  if(datediff <= 0){
    alert("Start date can NOT be from today and the past!")
    date.focus();
    date.select();
    return false;
  }
}
