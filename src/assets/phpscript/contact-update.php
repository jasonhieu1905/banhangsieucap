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
$title1 = $_POST['title1'];
$introduction1 = $_POST['introduction1'];
$introduction2 = $_POST['introduction2'];
$slogan = $_POST['slogan'];
$phone1 = $_POST['phone1'];
$phone2 = $_POST['phone2'];
$email = $_POST['email'];
$facebook = $_POST['facebook'];
$youtube = $_POST['youtube'];
$googleplus = $_POST['googleplus'];
$sql = "UPDATE contact SET title1 = '$title1', 
introduction1 = '$introduction1', introduction2= '$introduction2',
slogan = '$slogan', phone1 = '$phone1',
phone2 = '$phone2', email = '$email',
facebook = '$facebook', youtube= '$youtube', googleplus='$googleplus' WHERE id = '$id'";

$response = array();
if ($conn->query($sql) === TRUE) {
    $response['status'] = 'success';
} else {
    $response['status'] = 'error';
}
echo json_encode($response);
$conn->close();
?>