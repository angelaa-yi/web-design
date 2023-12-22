<?php

	// grab data from the user
	$title=$_POST['title'];
	$year=$_POST['year'];
	// $year=intval($year);

	//connect to database
	// before publicHTML put it in homebase under database... make  a new folder and put it in there and put the path in here instead
	$dbpath='/home/ay1520/database/movies.db' ;
	$db = new SQLite3($dbpath);

	// make sure that both title and year are inserted
	if (!($title && $year)){
		header("Location: add_form.php?error=forgot");
		exit();
	}
	else if (!is_numeric($year)){
		// make sure that the year is an int
		header("Location: add_form.php?error=year");
		exit();
	}
	else{
		//insert a record into our table
		$sql = "INSERT INTO movies(title, year) VALUES(:title, :year)";
		$statement=$db->prepare($sql);
		$statement->bindValue(':title', $title);
		$statement->bindValue(':year', $year);
		$statement->execute();

		$rows_affected=$db->changes();
		print $rows_affected;

		$db->close();
		unset($db);

		// redirect them back so they can add more movies to the database
		header("Location: add_form.php?error=none");
		exit();
	}

?>