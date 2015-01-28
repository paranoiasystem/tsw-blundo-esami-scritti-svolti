<!DOCTYPE html>
<html>
<head>
	<title>esame del 20-06-2013</title>
	<script type="text/javascript">
		function mostra(id){
			alert(id);
		}
	</script>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<?php
	/*if(!isset($_COOKIE['fsdf']) || $_COOKIE['fsdf'] != "2xs"){
		echo "Errore";
	} else if (isset($_COOKIE['fsdf']) && $_COOKIE['fsdf'] == "2xs"){*/
		$connect = mysql_connect("localhost", "root", "") or die ("Errore nella conessione");
		mysql_select_db("magazzino", $connect) or die("Errore nella selezione");
		$query = mysql_query("SELECT * FROM merce") or die("Errore nella query");
?>
	<div id="cont">
		<table border="1">
			<thead><tr><td>Prodotto</td><td>Prezzo Massimo</td><td>Prezzo Minimo</td></tr></thead>
			<tbody>
<?php
		$i = 0;
		while($row = mysql_fetch_array($query)){
		echo '<tr id="' . $i . '" onclick=mostra(' . $i .')><td>' . $row[0] . '</td><td>' . $row[1] . '</td><td>' . $row [2] . '</td></tr>';
		$i++;
		}
?>
			</tbody>
		</table>
		<p>Merce in magazzino</p>
	</div>
<?php
	//}
?>
</body>
</html>