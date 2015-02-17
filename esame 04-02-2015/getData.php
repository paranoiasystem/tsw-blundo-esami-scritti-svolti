<?php
	header("Content-type: text/xml");
	$xml = "<response>";
	$con = mysql_connect("localhost", "mfwebitaly", "");
	mysql_select_db("my_mfwebitaly", $con);
	$ris = mysql_query("SELECT * FROM modelli WHERE modello = '" . $_GET['m'] . "'");
	$row = mysql_fetch_array($ris);
	$xml .= "<modello>" . $row[0] . "</modello><mis_27>" . $row[1] . "</mis_27><mis_29>" . $row[2] . "</mis_29>";
	$xml .= "</response>";
	echo $xml;
?>