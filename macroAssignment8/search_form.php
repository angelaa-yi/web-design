<!DOCTYPE html>
<html>
<head>
	<title>Movie Database</title>
	<style>
		#error{
			background-color: red;
			color: white;
			padding: 10px;
		}
	</style>
</head>
<body>
	<h1>My Movie Database: Search</h1>

	<?php
		include('header.php');

		$error=$_GET['error'];
		if($error=='noInput'){
			print "<div id='error'>Please input a value!</div>";
		}
	?>

	<form method="POST" action="search.php">
		Title: <input type="text" name="title"><br>
		Year: <input type="text" name="year"><br>
		<input type="submit" name="submit">
	</form>

</body>
</html>