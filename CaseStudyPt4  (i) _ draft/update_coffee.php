<html>
<head>
  <title>JavaJam Coffee House</title>
</head>
<body>
  <h1> JavaJam Coffee Entry Result</h1>
<?php
  //Create short variable names

  $selectedName = $_POST['selectedName'];
  $selectedSize = $_POST['selectedSize'];
  $selectedPrice = $_POST['selectedPrice'];
  $selectedDescription = $_POST['selectedDecription'];

  if (!$selectedName || !$selectedSize || !$selectedPrice) {
     echo "You have not entered all the required details.<br />"
          ."Please go back and try again.";
     exit;
  }

  if(!$selectedDescription){
    if($selectedName == just){
      $selectedDescription = "Regular house blend, decaffeinated coffee, or flavor of the day.";
    }else if($selectedName == cafe){
      $selectedDescription = "House blended coffee infused into a smooth, steamed milk.";
    }else if($selectedDescription == cappuccino){
      $selectedDescription = "Sweetened espresso blended witj icy-cold milk and served in a chilled glass.";
    }
  }

  if (!get_magic_quotes_gpc()) {
    $selectedName = addslashes($selectedName);
    $selectedSize = addslashes($selectedSize);
    $selectedPrice = doubleval($selectedPrice);
    $selectedDescription = addslashes($selectedDescription);
  }

  @ $db = new mysqli('localhost', 'f37ee', 'f37ee', 'f37ee');

  if (mysqli_connect_errno()) {
     echo "Error: Could not connect to database.  Please try again later.";
     exit;
  }

  $query = "UPDATE $selectedName SET price = $selectedPrice and description = $selectedDescription WHERE size = $selectedSize";
  //$query = "insert into just values
    //        ('".$selectedSize."', '".$selectedPrice."', '".$selectedDescription."')";

  $result = $db->query($query);

  if($result){
    echo  $db->affected_rows." coffee updated into database.";
  }else{
    echo "An error has occurred.  The item was not updated.";
  }
  $db->close();
 ?>
</body>
</html>
