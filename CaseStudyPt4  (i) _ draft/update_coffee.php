<?php
  //Create short variable names

  $selectedName = $_POST['selectedName'];
  $selectedSize = $_POST['selectedSize'];
  $selectedPrice = $_POST['selectedPrice'];
  //$selectedDescription = $_POST['selectedDecription'];

  if (!$selectedName || !$selectedSize || !$selectedPrice) {
     echo "You have not entered all the required details.<br />"
          ."Please go back and try again.";
     exit;
  }

/*
  if(!$selectedDescription){
    if($selectedName == just){
      $selectedDescription = "Regular house blend, decaffeinated coffee, or flavor of the day.";
    }else if($selectedName == cafe){
      $selectedDescription = "House blended coffee infused into a smooth, steamed milk.";
    }else if($selectedDescription == cappuccino){
      $selectedDescription = "Sweetened espresso blended witj icy-cold milk and served in a chilled glass.";
    }
  }
*/

  if (!get_magic_quotes_gpc()) {
    $selectedName = addslashes($selectedName);
    $selectedSize = addslashes($selectedSize);
    $selectedPrice = doubleval($selectedPrice);
    //$selectedDescription = addslashes($selectedDescription);
  }

  //@ $db = new mysqli('localhost', 'f37ee', 'f37ee', 'f37ee');
@ $db = mysqli_connect("localhost", "f37ee", "f37ee", "f37ee");

  if (mysqli_connect_errno()) {
     echo "Error: Could not connect to database.  Please try again later.";
     exit;
  }

  $query = "UPDATE `menu` SET `price` = $selectedPrice WHERE `name`=  '".$selectedName."' AND `size` = '".$selectedSize."'   ";
  //$query = "insert into just values
    //        ('".$selectedSize."', '".$selectedPrice."', '".$selectedDescription."')";
  $result = mysqli_query($db,$query);
  //$result = $db->query($query);

  if($result){
    echo " New price updated into database.";
  }else{
    echo "An error has occurred.  The item was not updated.";
  }

  echo"<br>";
  echo"<br>";
  echo"<br>";
  echo "Price updated at ".date('H:i, jS F Y')."";
  echo"<br>";
  echo"<br>";

  $retrieval = "SELECT * FROM `menu`";
  $display = mysqli_query($db,$retrieval);
  if (mysqli_num_rows($display) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($display)) {
        echo "Item: " . $row["name"]. " - Size: " . $row["size"]. " - Price: " . $row["price"]. "<br>";
    }
  } else {
    echo "0 results";
  }

  $db->close();
  echo"<br>";
  echo"<br>";

  echo '<a href="update_coffee.html">Back</a>';
 ?>
