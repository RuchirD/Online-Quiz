<?php

require_once('db.php');

if(isset($_GET['all'])) {
    $sql = "SELECT * FROM `questions`";
    $result = mysql_query($sql);
    $res = "";
    $return_arr = array();
    while($row = mysql_fetch_array($result)) {
        $row_array['id'] = $row['id'];
        $row_array['ques'] = $row['ques'];
        $row_array['ans'] = explode(";", $row['ans']);
        array_push($return_arr, $row_array);
    }
    header('Content-Type: application/json');
    echo json_encode(array(count($return_arr), $return_arr));
}
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_GET['submit'])) {
    $data = json_decode($_POST['content']);
    $score = 0;
    $sql = "SELECT * FROM `questions`";
    $result = mysql_query($sql);
    while($row = mysql_fetch_array($result)) {
        forEach($data as $q) {
            if($q->id == $row['id'] && $q->selectedAns == $row['correctans']) {
                $score++;
            }
        }
    }
    echo json_encode(array("Score"=>$score));
}

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_GET['admin'])) {
    $data = json_decode($_POST['content']);
    $id = 1 + mysql_num_rows(mysql_query("SELECT * FROM `questions`"));
    $sql = "INSERT INTO `quiz`.`questions` (`_id`, `ques`, `ans`, `correctans`,`id`) VALUES (NULL, '$data->ques', '" . implode(";",$data->ans) . "', '$data->correctans', '$id');";
    $result = mysql_query($sql);
    echo json_encode(array("result"=>$result));
}
?>
