<!DOCTYPE html>
<html>
<head>
	<title>Quiz!</title>
	<style>
		@import url('https://fonts.cdnfonts.com/css/homer-simpson-revised');

		h1{
			font-family: 'Homer Simpson Revised', sans-serif;
			font-size: 250%;
		}

		p{
			font-family: 'Homer Simpson Revised', sans-serif;
			font-size: 150%;
		}

		body{
			background-color:rgb(223,205,104);
		}
		
		#error{
			background-color: red;
			color: white;
			padding: 10px;
			font-size:200%;
		}

		#card{
			border: solid 5px black;
			display: block;
			justify-content: center;
			margin-left: auto;
			margin-right: auto;
			text-align: center;
			max-width: 200px;
			border-radius: 25px;
		}

		#line{
			background-color: grey;
			min-width: ;
			max-height: 3px;
		}
	</style>
</head>
<body>
	<h1>Which Simpson Character Am I?</h1>

	<?php
		if($_COOKIE['character']){
			print "<div id='card'>";
			print "<div>You are " . $_COOKIE['character'] . "</div>";
			print "<img src = 'images/". $_COOKIE['character'] . ".png'/><br>";
			print "<button><a href=clear.php>Take Again?</a></button>";
			print "</div>";
			print "<div id='line'></div>";
			print "<a href=results.php>See Aggregate Results</a>";
		}

		else {
	?>

	<?php
		if($_GET['error']=='forgot'){
			print '<div id="error">You forgot a value!</div>';
		}
	?>

	

	<form action="save.php" method="POST">
		<p>Favorite Color:
		<select name="color" id="color">
			<option value="">Select a color</option>
			<option value="y">Yellow</option>
			<option value="g">Green</option>
			<option value="b">Blue</option>
			<option value="r">Red</option>
		</select>

		<br>
		Favorite Food:
		<select name="food" id="food">
			<option value="">Select a food</option>
			<option value="pizza">Pizza</option>
			<option value="pasta">Pasta</option>
			<option value="sushi">Sushi</option>
			<option value="veggies">Veggies</option>
		</select>

		<br>
		Favorite Season:
		<select name="season" id="season">
			<option value="">Select a season</option>
			<option value="spring">Spring</option>
			<option value="winter">Winter</option>
			<option value="summer">Summer</option>
			<option value="fall">Fall</option>
		</select>

		<br>
		Favorite Time of the Day:
		<select name="time" id="time">
			<option value="">Select a time</option>
			<option value="evening">Evening</option>
			<option value="morning">Morning</option>
			<option value="afternoon">Afternoon</option>
			<option value="midnight">Midnight</option>
		</select></p>

		<input type="submit">
	</form>

	<?php
		}
	?>
</body>
</html>