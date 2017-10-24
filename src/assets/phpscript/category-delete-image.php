<?php
include 'mysql.php';
header('Access-Control-Allow-Origin: *');
    // Open a directory, and read its contents
$imagesStr = $_GET['images'];
$imagesArr = explode(",", $imagesStr);
$baseUrl = "../images/category/";
foreach ($imagesArr as $file) {
    unlink($baseUrl.$file);
}

?>

