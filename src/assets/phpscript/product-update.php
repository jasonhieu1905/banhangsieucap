<?php
include 'mysql.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$id = $_POST['id'];
$product_id = $_POST['product_id'];
$category_id = $_POST['category_id'];
$name = $_POST['name'];
$description = $_POST['description'];
$size = $_POST['size'];
$parent_image = $_POST['parent_image'];
$children_image = $_POST['children_image'];
$price = $_POST['price'];
$priority = $_POST['priority'];
$video_url = $_POST['video_url'];

$sql = "UPDATE product SET product_id = '$product_id', 
category_id = '$category_id', name= '$name' , description= '$description' , size= '$size' , 
parent_image= '$parent_image', children_image= '$children_image', price= '$price', 
priority= '$priority', video_url='$video_url' WHERE id = '$id'";

$response = array();
if ($conn->query($sql) === TRUE) {
    $response['status'] = 'success';
} else {
    $response['status'] = 'error';
}
echo json_encode($response);
$conn->close();
?>