<!doctype html>
<html lang="en">
<head>
  <title>JavaJam Coffee House</title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="wrapper">
    <header>
      <img src="Banner.png" alt="JavaJam Coffee House" width="700" height="86">
    </header>
  <!--</div>-->
    <div id="leftcolumn">
      <nav>
      <ul>
        <li><a href="coffee_update.html">Product<br>Price<br>Update</a></li>
        <li><a href="sales_dollar.html"><br>Sales<br>Report</a></li>
      </ul>
    </nav>
    </div>
    <!--<h2> Follow the Winding Road to JavaJam </h2>-->
  <!--  <img src="windingroad.png" alt="Winding Road" style="width: 50%">-->
  <div id="rightcolumn">
    <div class="content">
      <h2>Total Dollar Sales by Products</h2>


    <?php

    @ $db = mysqli_connect("localhost", "f37ee", "f37ee", "f37ee");

    if (mysqli_connect_errno()) {
      echo "<br>Failed to connect to MySQL: " . mysqli_connect_error();
      exit;
    }

    echo '<table border="0" class="table">';
      echo '<tr>';

        echo '<th>';
          echo 'Item';
        echo '</th>';
        echo '<th>';
          echo 'Size';
        echo '</th>';
        echo '<th>';
          echo 'Quantity';
        echo '</th>';
        echo '<th>';
          echo 'Subtotal';
        echo '</th>';
      echo '</tr>';

      $query = "SELECT `order`.`item`, `order`.`size`, `order`.`qty`, `order`.`amount`,
      count(`order`.`item`) AS number_of_sales,
      SUM(`order`.`amount`) AS sales_amount
      FROM `order`";

      $retrieval = "SELECT * FROM `order`";
      $display = mysqli_query($db,$retrieval);
      if (mysqli_num_rows($display) > 0) {
        // output data of each row
        while($row = mysqli_fetch_assoc($display)) {
            echo "Item: " . $row["item"]. " - Size: " . $row["size"]. " - Quantity: " . $row["qty"]. " - Amount $: " . $row["amount"]."<br>";
        }
      } else {
        echo "0 results";
      }

      $db->close();


    ?>
  </div>
  </div>
  <footer>
    <small><i>Copyright &copy; 2014 JavaJam Coffee House
    <br> <a href="mailto:ling@li.com">ling@li.com</a>
  </i></small>
  </footer>
</body>
</html>
