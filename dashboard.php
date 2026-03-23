<?php
include 'config.php';

$result = $conn->query("SELECT * FROM users LIMIT 1");
$user = $result->fetch_assoc();

echo "<h2>Welcome " . $user['name'] . "</h2>";
echo "<h3>Plan: " . $user['plan'] . "</h3>";

if ($user['plan'] == "Basic") {
    echo "Access: Limited";
}
elseif ($user['plan'] == "Premium") {
    echo "Access: Medium Features";
}
else {
    echo "Access: Full Features";
}
?>
