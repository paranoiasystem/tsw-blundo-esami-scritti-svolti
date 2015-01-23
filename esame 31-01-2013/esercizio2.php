<?php if(empty($_POST)){ ?>
<!DOCTYPE html>
<html>
<head>
	<title>esame 31-01-2013 esercizio 2</title>
	<link rel="stylesheet" type="text/css" href="esercizio2.css">
</head>
<body>
	<div id="center">
		<form method="POST" action="esercizio2.php">
			<input type="text" name="first"> + <input type="text" name="second"> = <input type="text" name="result"><br/>
			<button type="submit" value="Submit">Somma</button> <button type="reset" value="Reset">Annulla i campi</button>
		</form>
	</div>

</body>
</html>
<?php } else { ?>
<!DOCTYPE html>
<html>
<head>
	<title>esame 31-01-2013 esercizio 2</title>
	<link rel="stylesheet" type="text/css" href="esercizio2.css">
</head>
<body>
	<div id="center">
		<form method="POST" action="esercizio2.php">
			<input type="text" name="first" value="<?php echo $_POST['first']; ?>"> + <input type="text" name="second" value="<?php echo $_POST['second']; ?>"> = <input type="text" name="result" value="<?php $somma = $_POST['first'] + $_POST['second']; echo $somma; ?>"><br/>
			<button type="submit" value="Submit">Somma</button> <button type="reset" value="Reset">Annulla i campi</button>
		</form>
	</div>

</body>
</html>
<?php } ?>