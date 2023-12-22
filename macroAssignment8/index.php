<!DOCTYPE html>
<html>
<head>
	<title>Movie Database</title>
	<style>
		#deleteSuccess{
			background-color: rgb(215,236,253);
			padding: 10px;
		}

		table{
			border: solid 1px black;
		}

		td{
			border: solid 1px black;
		}

		th{
			border: solid 1px black;
		}
	</style>
</head>
<body>
	<h1>My Movie Database</h1>

	<?php
		include('header.php');

		$actionTaken=$_GET['actionTaken'];
		if($actionTaken=='delete'){
			print "<div id='deleteSuccess'>Movie was deleted successfully!</div><br>";
		}

		// grab all movies from the database and diplay to the user
		// connect to database
		// before publicHTML put it in homebase under database... make  a new folder and put it in there and put the path in here instead
		$dbpath='/home/ay1520/database/movies.db' ; ;
		$db = new SQLite3($dbpath);

		// set up a SQL query to get all movies from the table
		$sql = "SELECT id, title, year FROM movies"; // setting a limitter by saying WHERE year=...
		$statement=$db->prepare($sql);
		$result=$statement->execute();

		// iterate over those movies annd generate output
		print "<table>
			<tr>
				<th>Title</th>
				<th>Year</th>
				<th>Options</th>
			</tr>";

		while($array=$result->fetchArray()){
			print '<tr> 
					<td>' . $array['title'] . '</td>
					<td>' . $array['year'] . '</td>
					<td><a href = "delete.php?id=' . $array['id'] . '"> Delete</a>' . '</td>
				</tr>';
		}
		print "</table>";

		$db->close();
		unset($db);

		
	?>


</body>
</html>