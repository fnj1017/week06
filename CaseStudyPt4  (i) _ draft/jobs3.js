function chkName(event){

  //Get the target node of the events

  var name = event.currentTarget;

  //Test the format of the input name
  //Allow the spaces after the commas to be optional
  //Allow the period after the initial to be optional
  var re = /^[A-Z][a-z]+[\s][A-Z][a-z]+$/;
  if(!re.test(name.value)){
    alert("This name ou entered is not in the correct form");
    name.focus();
    name.select();
  return false;
  }
}


function chkEmail(event){
  //Get the target node of the events
  var email = event.currentTarget;
  var re = /^[\w.-]+@([\w]+\.){1,3}[A-Za-z]{2,3}$/;
  //Test the format of the input email address
  if (!re.test(email.value)) {
    alert("The Email you entered is not in the correct form.");
    Email.focus();
    Email.select();
	return false;
  }
}


function chkDate(event){
  //Get the target node of the addEventListener
  var date = new Date(event.currentTarget.value);

  var now = new Date();

  if(now >= date){
    alert("Start date can NOT be from today and the past!")
    date.focus();
    date.select();
    return false;
  }
}
