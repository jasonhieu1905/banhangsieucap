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
$name = $_POST['name'];
$description = $_POST['description'];
$image = $_POST['image'];
$priority_id = $_POST['priority_id'];

$sql = "UPDATE category SET name = '$name',
description = '$description', image= '$image', priority_id= '$priority_id'
WHERE id = '$id'";

$response = array();
if ($conn->query($sql) === TRUE) {
    $response['status'] = 'success';
} else {
    $response['status'] = 'error';
}
echo json_encode($response);
$conn->close();
?>