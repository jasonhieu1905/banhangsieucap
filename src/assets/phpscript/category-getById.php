<?php
include 'mysql.php';
header('Access-Control-Allow-Origin: *');


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$id = $_GET["id"];
$sql = "SELECT * FROM category WHERE ID=" . $id;

$result = $conn->query($sql);

$emparray = array();
while($row =mysqli_fetch_assoc($result))
{
    $emparray[] = $row;
}
echo json_encode($emparray);
$conn->close();

?>