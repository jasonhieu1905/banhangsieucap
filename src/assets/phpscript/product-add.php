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
$product_id = $_POST['product_id'];
$category_id = $_POST['category_id'];
$name = $_POST['name'];
$description = $_POST['description'];
$size = $_POST['size'];
$parent_image = $_POST['parent_image'];
$children_image = $_POST['children_image'];
$price = $_POST['price'];
$priority = $_POST['priority'];

$sql = "INSERT INTO PRODUCT (product_id, category_id, name,description, size, parent_image, children_image, price, priority)
VALUES ('$product_id', '$category_id', '$name', '$description', '$size', '$parent_image', '$children_image', '$price', '$priority' )";

$response = array();
if ($conn->query($sql) === TRUE) {
    $response['status'] = 'success';
} else {
    $response['status'] = 'error';
}
echo json_encode($response);
$conn->close();
?>