const guitarLines=document.querySelectorAll('.guitarLines');
const sound=new Audio(`sounds/C3.mp3`);

for(let i=0;i<guitarLines.length; i++){
	guitarLines[i].addEventListener('mouseover', function(event){
		sound.play();
	});
}


const yayParent=document.querySelector('.yayParent');
const cuteParent=document.querySelector('.cuteParent');
const keyboards=document.querySelectorAll('.keyboard');
const keyboardFlats=document.querySelectorAll('.keyboardFlat');
const p=document.querySelector('p');
const body=document.querySelector('body');


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


for(let i=0; i<keyboards.length; i++){
	keyboards[i].addEventListener('click', playKeyboard);
	keyboards[i].addEventListener('click', playSound);
}

for (let i=0;i<keyboardFlats.length; i++){
	keyboardFlats[i].addEventListener('click', playKeyboardFlats);
	keyboardFlats[i].addEventListener('click', playSound);
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


const video2=document.querySelector('#video2');
		const canvas2 = document.querySelector('#canvas2');
		const context2 = canvas2.getContext('2d');

		let width2;
		let height2;
		let pxScale2 = window.devicePixelRatio;
		const pixelColors = [];

		function setup2() {
	        video2.play();

	        width2 = canvas2.width;
	        height2 = canvas2.height;

	        canvas2.style.width = width2 + 'px';
	        canvas2.style.height = height2 + 'px';

	        canvas2.width = width2 * pxScale2;
	        canvas2.height = height2 * pxScale2;

	        context2.scale(pxScale2, pxScale2);
	    }

	    function draw2() {
	    	context2.drawImage(video2,0,0,width2,height2);
	        requestAnimationFrame(draw2);
	    }

	    window.addEventListener('load', () => {
	      	setup2();
	        draw2();
	    });