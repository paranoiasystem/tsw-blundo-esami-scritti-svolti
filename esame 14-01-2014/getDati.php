<?php
	if(empty($_GET['anno'])) echo "Uso: /getDati.php?anno=xxxx";
	else {
		$conn = mysql_connect("localhost", "root", "") or die("Problema nella conessione al database");
		mysql_select_db("database") or die("Problema nella selezione del database");
		$tabella = "ANNO_".$_GET['anno'];
		$query = "SELECT * FROM " . $tabella . "";
		$ris = mysql_query($query) or die("Problema nell'esecuzione della query " . $query);
		$xml ="<?xml version='1.0' encoding='UTF-8'?><response><anno>" . $_GET['anno'] . "</anno>";
		while($row = mysql_fetch_array($ris)) $xml .= '<' . $row ['MESE'] . '>' . $row['MILLIMETRI'] . '</' . $row ['MESE'] . '>';
		$xml .= '</response>';
		header("Content-type: text/xml");
		echo $xml;
	}
?>