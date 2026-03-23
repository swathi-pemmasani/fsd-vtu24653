<?php
include '../config.php';

$email = $_POST['email'];
$plan = $_POST['plan'];

$conn->query("UPDATE users SET plan='$plan' WHERE email='$email'");

echo "Plan Updated";
?>
