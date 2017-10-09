<?php
header('Access-Control-Allow-Origin: *');
    // Open a directory, and read its contents
$dir = "assets/images/category/";    
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

