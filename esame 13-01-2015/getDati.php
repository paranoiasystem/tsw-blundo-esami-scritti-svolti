<?php
	header("Content-type: text/xml");
	$xml = "<?xml version='1.0' encoding='UTF-8'?><response>";
	$con = mysql_connect("localhost", "root", "");
	mysql_select_db("nomeDB", $con);
	$ris = mysql_query("SELECT * FROM HOTEL WHERE codAlb = " . $_GET['codAlb']);
	$row = mysql_fetch_array($ris);
	$xml .= "<albergo>" . $row['albergo'] . "</albergo><camere>" . $row['camere'] . "</camere><posizione>" . $row['posizione'] . "</posizione><servizi>" . $row['servizi'] . "</servizi><pulizia>" . $row['pulizia'] . "</pulizia></response>"
	echo $xml;
?>