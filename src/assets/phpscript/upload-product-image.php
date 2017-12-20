<?php
header('Access-Control-Allow-Origin: *');
    if(count($_FILES['upload']['name']) > 0){
        //Loop through each file
        for($i=0; $i<count($_FILES['upload']['name']); $i++) {
          //Get the temp file path
            $tmpFilePath = $_FILES['upload']['tmp_name'][$i];

            //Make sure we have a filepath
            if($tmpFilePath != ""){
            
                //save the filename
                $shortname = $_FILES['upload']['name'][$i];

                //save the url and the file
                $filePath = '../images/product/' . $_FILES['upload']['name'][$i];

                $FileCounter = 1; 
                $FinalFilename = $_FILES['upload']['name'][$i];
               // loop until an available filename is found 
                while (file_exists( '../images/product/'. $FinalFilename)) {
                    $FinalFilename = $FileCounter++.'_' . $_FILES['upload']['name'][$i]; 
                }
                //Upload the file into the temp dir
                if(move_uploaded_file($tmpFilePath, '../images/product/'.$FinalFilename)) {

                    $files[] = $FinalFilename;
                    //insert into db 
                    //use $shortname for the filename
                }
              }
        }
        echo json_encode($files);
    }
?>