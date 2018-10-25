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

      $query = "SELECT `menu`.`item_id`, `menu`.`name`, `menu`.`size`, `menu`.`price`,
      SUM(`order`.`qty`) AS number_of_sales,
      SUM(`order`.`amount`) AS sales_amount
      FROM `order`
      LEFT JOIN `menu`
      ON (`menu`.`item_id` = `order`.`item_id`)
      GROUP BY  `menu`.`item_id`
      ORDER BY `sales_amount`
      DESC";

      $result = mysqli_query($db,$query);
      $num_results = $result->num_rows;

      echo '<table border="0" class="table">';

        echo '<tr>';

          echo '<th>';
            echo 'Name';
          echo '</th>';

          echo '<th>';
            echo 'Size';
          echo '</th>';

          echo '<th>';
            echo 'Selnijing Price';
          echo '</th>';

          echo '<th>';
            echo 'Sold Qty';
          echo '</th>';

          echo '<th>';
            echo 'Total Sale ($)';
          echo '</th>';

        echo '</tr>';

      for ($i=0; $i < $num_results; $i++) {
         $row = $result->fetch_assoc();
         if($i==0)
          $first_row=$row;
      echo '<tr>';

        echo '<td "['.$i.']">';
         echo $row['name'];
        echo '</td>';

        echo '<td "['.$i.']">';
         echo $row['size'];
        echo '</td>';

        echo '<td "['.$i.']">';
         echo $row['price'];
        echo '</td>';

        echo '<td "['.$i.']">';
         echo $row['number_of_sales'];
        echo '</td>';

        echo '<td "['.$i.']">';
         echo $row['sales_amount'];
        echo '</td>';

      echo '</tr>';
      }
      echo '<tr>';
          echo "highest sale is ".$first_row['name']." with $".$first_row['sales_amount']."<br><br>";
      echo '</tr>';
      echo '</table>';

      $db->close();

    ?>

  </div>
  </div>
  <footer>
    <small><i>Copyright &copy; 2014 JavaJam Coffee House
    <br> <a href="mailto:nijing@feng.com">nijing@feng.com</a>
  </i></small>
  </footer>
</body>
</html>
