// radio_click2.js
//   An example of the use of the click event with radio buttons,
//   registering the event handler by assigning an event property

// The event handler for a radio button collection

function coffeeChoice (coffee) {

// Put the DOM address of the elements array in a local variable

  var dom = document.getElementById("auLait");

// Determine which button was pressed

  for (var index = 0; index < dom.auLait.length;
       index++) {
    if (dom.auLait[index].checked) {
      coffee = dom.auLait[index].value;
      break;
  }

  for (var index = 0; index < dom.Cappuccino.length;
       index++) {
    if (dom.Cappuccino[index].checked) {
      coffee = dom.Cappuccino[index].value;
      break;
  }
}

// Produce an alert message about the chosen coffee

  switch (coffee) {
    case "1":
      alert("single auLait");
      break;
    case "2":
      alert("DOuble auLait");
      break;
    case "3":
      alert("Single Cappuccino");
      break;
    case "4":
      alert("double Cappuccino");
      break;
    default:
      alert("Error in JavaScript function coffeeChoice");
      break;
  }
}
