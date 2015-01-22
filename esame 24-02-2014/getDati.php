<?php
	if(empty($_GET['week']) || empty($_GET['type'])) echo "Uso: /getDati.php?week=xxxx&type=xxxx\n type = xml or json";
	else {
		$conn = mysql_connect("localhost", "root", "") or die("Problema nella conessione al database");
		mysql_select_db("database") or die("Problema nella selezione del database");
		$query = "SELECT * FROM ANNO WHERE Settimana = " . $_GET['week'];
		$ris = mysql_query($query) or die("Problema nell'esecuzione della query " . $query);
		if ($_GET['type'] == 'xml') {
			$row = mysql_fetch_array($ris);
			$xml ="<?xml version='1.0' encoding='UTF-8'?><response><settimana>" . $_GET['week'] . "</settimana><lunedi>" . $row['Lu'] . "</lunedi><martedi>" . $row['Ma'] ."</martedi><mercoledi>" . $row['Me'] . "</mercoledi><giovedi>" . $row['Gi'] . "</giovedi><venerdi>" . $row['Ve'] . "</venerdi><sabato>" . $row['Sa'] . "</sabato><domenica>" . $row['Do'] . "</domenica></response>";
			header("Content-type: text/xml");
			echo $xml;
		} else if ($_GET['type'] == 'json') {
			$row = mysql_fetch_array($ris);
			echo json_encode($row);
		} else echo 'Type non è coretto';
	}
?>