<?php
$conn = mysql_connect("localhost", "ruchir", "abcd1234") or die("failed to connect");

$db = mysql_select_db("quiz", $conn)  or die("failed to connect db");
?>