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
$username_login = $_POST["username"];
$password_login = $_POST["password"];
$sql = "SELECT * FROM ACCOUNT WHERE USERNAME = '$username_login' AND PASSWORD = '$password_login'" ;

$result = $conn->query($sql);

$emparray = array();
while($row =mysqli_fetch_assoc($result))
{
    $emparray[] = $row;
}
echo json_encode($emparray);
$conn->close();

?>
