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

		#success{
			background-color: rgb(215,236,253);
			padding: 10px;
		}
	</style>
</head>
<body>
	<h1>My Movie Database: Add</h1>
	
	<?php
		include('header.php');

		// check if the add_save returned an error and if it did return an error have the form show that the user did not type in both the year and title
		$error=$_GET['error'];

		if($error=='forgot'){
			print '<div id="error">You forgot a value!</div><br>';
		}
		else if($error=="year"){
			print '<div id="error">The year you entered is invalid!</div><br>';
		}
		else if($error=='none'){
			print '<div id="success">The movie was added successfully!</div><br>';
		}

		include('header2.php');
	?>


</body>
</html>