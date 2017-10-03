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
$username = $_POST['username'];
$password = $_POST['password']; 
$sql = "UPDATE ACCOUNT SET PASSWORD = '$password' 
 WHERE USERNAME = '$username'";

$response = array();
if ($conn->query($sql) === TRUE) {
    $response['status'] = 'success';
} else {
    $response['status'] = 'error';
}
echo json_encode($response);
$conn->close();
?>