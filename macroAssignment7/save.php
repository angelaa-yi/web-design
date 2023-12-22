<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<?php
		// grab the incoming data
		$color=$_POST['color'];
		$food=$_POST['food'];
		$season=$_POST['season'];
		$time=$_POST['time'];
		$homer=0;
		$marge=0;
		$lisa=0;
		$bart=0;

		// validate the data
		if (!($color&&$food&&$season&&$time)){
			//send them back to the form and tell them to fill it out
			header("Location: quiz.php?error=forgot");
			exit();
		}

		// diagnose which character the user is
		if ($color=='y'){
			$homer++;
		}
		else if ($color=='g'){
			$marge++;
		}
		else if ($color=='b'){
			$bart++;
		}
		else{
			$lisa++;
		}

		if ($food=='pizza'){
			$homer++;
		}
		else if ($food=='pasta'){
			$marge++;
		}
		else if ($food=='sushi'){
			$bart++;
		}
		else{
			$lisa++;
		}

		if ($season=='spring'){
			$homer++;
		}
		else if ($season=='winter'){
			$marge++;
		}
		else if ($season=='summer'){
			$bart++;
		}
		else{
			$lisa++;
		}

		if ($time=='evening'){
			$homer++;
		}
		else if ($time=='morning'){
			$marge++;
		}
		else if ($timer=='afternoon'){
			$bart++;
		}
		else{
			$lisa++;
		}



		if($homer<$marge){
			if($marge<$bart){
				if($bart<$lisa){
					$char = "Lisa";
				}
				else{
					$char = "Bart";
				}
			}
			else{
				$char = "Marge";
			}
		}
		else if ($homer<$bart){
			if($bart<$lisa){
				$char = "Lisa";
			}
			else{
				$char = "Bart";
			}
		}
		else if($homer<$lisa){
			$char = "Lisa";
		}
		else{
			$char = "Homer";
		}


		// save the data to a file on the server
		$file = '/home/ay1520/database/results.txt';
		file_put_contents($file, $char . "\n", FILE_APPEND);

		// set cookie
		setcookie('character', $char);

		// send them back so they can see their result
		header("Location: quiz.php");
		exit();
	?>
</body>
</html>