<?php
include 'mysql.php';
header('Access-Control-Allow-Origin: *');
    // Open a directory, and read its contents
$dir = '../images/product';    
$emparray = array();
if (is_dir($dir)){
    if ($dh = opendir($dir)){
      while (($file = readdir($dh)) !== false){
        $emparray[] = $file;
      }
      echo json_encode($emparray);
      closedir($dh);
    }
  }

?>

