<html>
<head>
	<style>
		@import url('https://fonts.cdnfonts.com/css/homer-simpson-revised');

		h1{
			font-family: 'Homer Simpson Revised', sans-serif;
			font-size: 250%;
		}

		body{
			background-color:rgb(223,205,104);
		}

		p{
			font-family: 'Homer Simpson Revised', sans-serif;
			font-size: 150%;
		}

		p2{
			font-family: 'Homer Simpson Revised', sans-serif;
			font-size: 100%;
		}

		.histogram{
			width:75%;
			height:15px;
			display:flex;
			border:1px solid black;
		}

		table{
			width:75%;
		}

		th{
			border: solid 1px black;
		}

		td{
			border: solid 1px black;
		}

		#bartHist{
			background-color: red;
			height:15px;
		}

		#homerHist{
			background-color: lightgreen;
			height:15px;
		}

		#lisaHist{
			background-color: lightblue;
			height:15px;
		}

		#margeHist{
			background-color: pink;
			height:15px;
		}

	</style>
</head>
<body>
	<h1>Results!</h1>
	<?php 
		$numOfSubmissions=0;
		$bartNum=0;
		$homerNum=0;
		$lisaNum=0;
		$margeNum=0;
		// start by opening the text file
		$filename = '/home/ay1520/database/results.txt';

		$data = file_get_contents($filename);

		$lines = explode("\n", $data);

		for($i=0; $i < sizeof($lines); $i++){
			$numOfSubmissions++;

			if($lines[$i]=='Bart'){
				$bartNum++;
			}
			else if($lines[$i]=='Homer'){
				$homerNum++;
			}
			else if($lines[$i]=='Lisa'){
				$lisaNum++;
			}
			else if($lines[$i]=='Marge'){
				$margeNum++;
			}

			// print $lines[$i];
			// print "<br>\n";
		}

		// count the number of chracters
		$numOfSubmissions=$numOfSubmissions-1;

		$bartPercent = ($bartNum/$numOfSubmissions)*100;
		$homerPercent = ($homerNum/$numOfSubmissions)*100;
		$lisaPercent = ($lisaNum/$numOfSubmissions)*100;
		$margePercent = ($margeNum/$numOfSubmissions)*100;

		// provide results to the user
		print "<div id='simpdex'>
		<table>
			<tr>
			  <th>Character</th>
			  <th>Count</th>
			  <th>Percent</th>
			  <th>Simpgram Color</th>
			</tr>
			<tr>
			  <td>Bart</td>
			  <td>". $bartNum . "</td>
			  <td>" . $bartPercent . "%</td>
			  <td>Red</td>
			</tr>
			<tr>
			  <td>Homer</td>
			  <td>" . $homerNum . "</td>
			  <td>" . $homerPercent . "%</td>
			  <td>Green</td>
			</tr>
			<tr>
			  <td>Lisa</td>
			  <td>" . $lisaNum . "</td>
			  <td>" . $lisaPercent . "%</td>
			  <td>Blue</td>
			</tr>
			<tr>
			  <td>Marge</td>
			  <td>" . $margeNum . "</td>
			  <td>" . $margePercent . "%</td>
			  <td>Pink</td>
			</tr>
		</table>
	</div>";

		print "<p>Simpgram!</p>";

		print "<div class='histogram'><div id='bartHist' style='width:". $bartPercent ."%;'>&nbsp;</div><div id='homerHist' style='width:". $homerPercent ."%;'>&nbsp;</div><div id='lisaHist' style='width:". $lisaPercent ."%;'>&nbsp;</div><div id='margeHist' style='width:". $margePercent ."%;'>&nbsp;</div></div><br>";



		print "<p2>Total number of quiz submission: " . $numOfSubmissions . "</p2>";

		// take the user back to the quiz
		print "<br><br><button><a href=clear.php>Take Again?</a></button>";
	?>
</body>
</html>