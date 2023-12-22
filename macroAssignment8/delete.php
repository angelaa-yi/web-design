<?php
	// grab the data from the user
	$id = $_GET['id'];

	//connect to database
	// before publicHTML put it in homebase under database... make  a new folder and put it in there and put the path in here instead
	$dbpath='/home/ay1520/database/movies.db' ; ;
	$db = new SQLite3($dbpath);

	$sql = "DELETE FROM movies WHERE id=:id";
	$statement=$db->prepare($sql);
	$statement->bindValue(':id', $id);
	$statement->execute();

	$db->close();
	unset($db);

	header("Location:index.php?actionTaken=delete");
	exit();
?>