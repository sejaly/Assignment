<?php
// Establish a database connection
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the email ID from the request
$email = $_GET['email'];

// Fetch the health report file path from the database
$sql = "SELECT health_report FROM users WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output the file directly to the browser
    $row = $result->fetch_assoc();
    $filePath = $row['health_report'];
    header('Content-Type: application/pdf');
    header('Content-Disposition: inline; filename="' . basename($filePath) . '"');
    readfile($filePath);
} else {
    echo "Health report not found!";
}

// Close the database connection
$conn->close();
?>
