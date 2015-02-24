<?php

require_once('db.php');

if(isset($_GET['all'])) {
    $sql = "SELECT * FROM `questions`";
    $result = mysql_query($sql);
     $res = "";
    while($row = mysql_fetch_array($result)) {
        $res .= "ID: " . $row['id'] . "Q : " . $row['query'] . "<br>";
    }
    echo $res;
}

?>
