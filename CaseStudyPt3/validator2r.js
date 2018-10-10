// validator2r.js
//   The last part of validator2. Registers the
//   event handlers
//   Note: This script does not work with IE8

// Get the DOM addresses of the elements and register
//  the event handlers

      var nameNode = document.getElementById("Name");
      //var phoneNode = document.getElementById("phone");
      nameNode.addEventListener("change", chkName, false);
      //phoneNode.addEventListener("change", chkPhone, false);

      var emailNode = document.getElementById("Email");
      emailNode.addEventListener("change", chkEmail, false);

      var ipDateNode = document.getElementById("Date_input");
      ipDateNode.addEventListener("change", chkipDate, false);
