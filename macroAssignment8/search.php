<!DOCTYPE html>
<html>
<head>
	<title>Movie Database</title>
</head>
<body>
	<h1>My Movie Database: Search Results</h1>
	<?php
		include('header.php');
		$title=$_POST['title'];
		$year=$_POST['year'];

		// connect to database
		// before publicHTML put it in homebase under database... make  a new folder and put it in there and put the path in here instead
		$dbpath='/home/ay1520/database/movies.db' ;
		$db = new SQLite3($dbpath);
		$available=false;

		if($title && $year){
			$sql="SELECT title,year FROM movies WHERE title=:title AND year=:year";
			$statement=$db->prepare($sql);
			$statement->bindValue(':title', $title);
			$statement->bindValue(':year', $year);
			$result =$statement->execute();

			print "<ul>";
			while($array=$result->fetchArray()){
				$available=true;
				print '<li>' . $array['title'] . ' - ' . $array['year'] . '</li><br>';
			}
			print "</ul>";

			if(!$available){
				print "Nothing available";
			}

		}
		else if($title){
			$sql="SELECT title,year FROM movies WHERE title=:title";
			$statement=$db->prepare($sql);
			$statement->bindValue(':title', $title);
			$result =$statement->execute();

			print "<ul>";
			while($array=$result->fetchArray()){
				$available=true;
				print '<li>' . $array['title'] . ' - ' . $array['year'] . '</li><br>';
			}
			print "</ul>";

			if(!$available){
				print "Nothing available";
			}
		}
		else if ($year){
			$sql="SELECT title,year FROM movies WHERE year=:year";
			$statement=$db->prepare($sql);
			$statement->bindValue(':year', $year);
			$result =$statement->execute();

			print "<ul>";
			while($array=$result->fetchArray()){
				$available=true;
				print '<li>' . $array['title'] . ' - ' . $array['year'] . '</li><br>';
			}
			print "</ul>";

			if(!$available){
				print "Nothing available";
			}
		}
		else if (!($title || $year)){
			header("Location:search_form.php?error=noInput");
			exit();
		}

	?>
</body>
</html>