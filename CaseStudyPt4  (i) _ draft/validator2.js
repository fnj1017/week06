// validator2.js
//   An example of input validation using the change and submit
//   events, using the DOM 2 event model
//   Note: This document does not work with IE8

// ********************************************************** //
// The event handler function for the name text box

function chkName(event) {

// Get the target node of the event

  var Name = event.currentTarget;

// Test the format of the input name
//  Allow the spaces after the commas to be optional
//  Allow the period after the initial to be optional

  var re = /^[A-Z][a-z]+[\s][A-Z][a-z]+$/;

  if (!re.test(Name.value)) {
    alert("The name you entered (" + Name.value +
          ") is not in the correct form. \n");
    Name.focus();
    Name.select();
	return false;
  }
}



function chkEmail(event) {

  var Email = event.currentTarget;

  var re = /^[\w.-]+@([\w]+\.){1,3}[A-Za-z]{2,3}$/;

  if (!re.test(Email.value)) {
    alert("The Email you entered (" + Email.value +
          ") is not in the correct form. \n");
    Email.focus();
    Email.select();
	return false;
  }
}



function chkipDate(event) {
  var today = new Date();
  var ipDate = event.currentTarget;
  var ipDate_2 = new Date(ipDate.value);

  console.log(today);
  console.log(ipDate_2);

  if (today >= ipDate_2) {
    alert("The date you entered cannot be today or before");
    ipDate.focus();
    ipdate.select();
	return false;
  }
}
