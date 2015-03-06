<?php
include ('socket.php');
$msg = $_GET ['msg'];
echo "Sending: " . $msg;
$socket = new SocketConnection ();
$socket->connect ( $msg );
?>