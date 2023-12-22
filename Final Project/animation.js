const yayParent=document.querySelector('.yayParent');
const cuteParent=document.querySelector('.cuteParent');
const keyboards=document.querySelectorAll('.keyboard');
const keyboardFlats=document.querySelectorAll('.keyboardFlat');
const play = document.querySelector('#play');
const retry = document.querySelector('#retry');
const nextRound=document.querySelector('#nextRound');
const p=document.querySelector('p');
const body=document.querySelector('body');

play.addEventListener('click', function(event){

	setTimeout(
		function(){
			colorYellow(9);
			playSound();
		},
	500);

	setTimeout(
		function(){
			colorWhite(9);
			playSound();
		},
	1000);

	setTimeout(
		function(){
			colorYellow(9);
			playSound();
		},
	1500);

	setTimeout(
		function(){
			colorYellow(10);
			colorWhite(9);
			playSound();
		},
	2000);

	setTimeout(
		function(){
			colorYellow(11);
			colorWhite(10);
			playSound();
		},
	2500);

	setTimeout(
		function(){
			colorWhite(11);
			playSound();
		},
	3000);

	setTimeout(
		function(){
			colorYellow(11);
			playSound();
		},
	3500);

	setTimeout(
		function(){
			colorYellow(10);
			colorWhite(11);
			playSound();
		},
	4000);

	setTimeout(
		function(){
			colorYellow(9);
			colorWhite(10);
			playSound();
		},
	4500);

	setTimeout(
		function(){
			colorYellow(8);
			colorWhite(9);
			playSound();
		},
	5000);

	setTimeout(
		function(){
			colorYellow(7);
			colorWhite(8);
			playSound();
		},
	5500);

	setTimeout(
		function(){
			colorWhite(7);
			playSound();
		},
	6000);

	setTimeout(
		function(){
			colorYellow(7);
			playSound();
		},
	6500);

	setTimeout(
		function(){
			colorYellow(8);
			colorWhite(7);
			playSound();
		},
	7000);

	setTimeout(
		function(){
			colorYellow(9);
			colorWhite(8);
			playSound();
		},
	7500);

	setTimeout(
		function(){
			colorWhite(9);
			playSound();
		},
	8000);

	setTimeout(
		function(){
			colorYellow(9);
			playSound();
		},
	8500);

	setTimeout(
		function(){
			colorYellow(8);
			colorWhite(9);
			playSound();
		},
	9000);

	setTimeout(
		function(){
			colorWhite(8);
			playSound();
		},
	9500);

	setTimeout(
		function(){
			colorYellow(8);
			playSound();
		},
	10000);

	setTimeout(
		function(){
			colorWhite(8);
			playSound();
		},
	10500);
});

function playKeyboard(event){
	event.target.style.backgroundColor='yellow';

	setTimeout(
		function(){
			event.target.style.backgroundColor='white';
		},
	500 );
}

function playKeyboardFlats(event){
	event.target.style.backgroundColor='yellow';

	setTimeout(
		function(){
			event.target.style.backgroundColor='black';
		},
	500 );
}

const actualSongArray=[9, 9, 10, 11, 11, 10, 9, 8, 7, 7, 8, 9, 9, 8, 8];
let songArray=[];

for(let i=0; i<keyboards.length; i++){
	keyboards[i].addEventListener('click', playKeyboard);
	keyboards[i].addEventListener('click', playSound);
	keyboards[i].addEventListener('click', function(){
		songArray.push(i);
	});
	keyboards[i].addEventListener('click', checkSong);
}

for (let i=0;i<keyboardFlats.length; i++){
	keyboardFlats[i].addEventListener('click', playKeyboardFlats);
	keyboardFlats[i].addEventListener('click', playSound);
	keyboardFlats[i].addEventListener('click', function(){
		songArray.push(`flat ${i}`);
	});
	keyboardFlats[i].addEventListener('click', checkSong);
}

function playSound(){
	const keyboardSoundFiles=['C3','D3','E3','F3','G3','A3','B3',
	'C4','D4','E4','F4','G4','A4','B4',
	'C5','D5','E5','F5'];
	let keyboardFiles={};

	for(let i=0; i<keyboardSoundFiles.length; i++){
		const audio=new Audio(`sounds/${keyboardSoundFiles[i]}.mp3`);
		keyboardFiles[keyboardSoundFiles[i]]=audio;
	}

	for(let i=0; i<yayParent.children.length; i++){
		let sound=keyboardFiles[keyboardSoundFiles[i]];
		if(yayParent.children[i].style.backgroundColor=='yellow'){
			sound.play();
		}
		setTimeout(function(){
			sound.pause;
		},500);

	}

	const keyboardFlatSoundFiles=['Db3','Eb3','Gb3','Ab3','Bb3',
	'Db4','Eb4','Gb4','Ab4','Bb4',
	'Db5','Eb5','Gb5'];
	let keyboardFlatFiles={};

	for(let i=0; i<keyboardFlatSoundFiles.length; i++){
		const audio=new Audio(`sounds/${keyboardFlatSoundFiles[i]}.mp3`);
		keyboardFlatFiles[keyboardFlatSoundFiles[i]]=audio;
	}

	for(let i=0; i<cuteParent.children.length; i++){
		let sound=keyboardFlatFiles[keyboardFlatSoundFiles[i]];
		if(cuteParent.children[i].style.backgroundColor=='yellow'){
			sound.play();
		}
		setTimeout(function(){
			sound.pause;
		},500);
	}
}

function colorYellow(event){
	yayParent.children[event].style.backgroundColor='yellow';
}

function colorWhite(event){
	yayParent.children[event].style.backgroundColor='white';
}

let bool=true;
function checkSong() {
	if(songArray.length>actualSongArray.length){
		retry.classList.remove('hidden');
		bool=false;
	}
	else{
		for(let i=0; i<songArray.length; i++){
			if(songArray[i]!=actualSongArray[i]){	
				retry.classList.remove('hidden');
				bool=false;
			}
		}
	}

	if (songArray.length==actualSongArray.length && bool){
		nextRound.classList.remove('hidden');
	}

}

retry.addEventListener('click', function(){
	retry.classList.add('hidden');
	songArray=[];
	bool=true;
});



