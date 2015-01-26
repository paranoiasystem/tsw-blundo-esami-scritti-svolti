<?php
	if (isset($_COOKIE['AUTH']) && $_COOKIE['AUTH'] == 'OK') {
		$connection = mysql_connect("localhost", "root", "pass");
		mysql_selectdb("sito", $connection);
		$query = "SELECT * FROM link ORDER BY titolo ASC";
		$risultato = mysql_query($query);
		while ($row = mysql_fetch_array($risultato)) {
			echo '<a href="' . $row['HREF'] . '">' . $row['TEXT'] . '</a>';
		}
	} else {
		header("login.html");
	}
?>