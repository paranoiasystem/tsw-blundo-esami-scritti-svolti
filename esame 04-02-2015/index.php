<!DOCTYPE html>
<html>
<head>
	<title>Esame</title>
	<script type="text/javascript" src="script.js"></script>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<?php
	//if (isset($_COOKIE) || $_COOKIE['nome']!='pippo') {
	//	echo "Accesso non autorizzato";
	//} else {
?>
	<div id="uno">
		<table border="1">
		<thead>
			<tr>
				<td>Modello</td>
				<td>27.5</td>
				<td>29</td>
			</tr>
		</thead>
		<tbody>
<?php
		$con = mysql_connect("localhost", "mfwebitaly", "");
		mysql_select_db("my_mfwebitaly", $con);
		$ris = mysql_query("SELECT * FROM modelli");
		while($row = mysql_fetch_array($ris))
			echo "<tr onclick='info(\"" . $row[0] . "\")'><td>" . $row[0] . "</td><td>" . $row[1] . "</td><td>" . $row[2] . "</td></tr>";
	//}
?>
		</tbody>
		</table>
		<p>Bici Mountain Bike</p>
	</div>
	<div id="due"></div>
</body>
</html>