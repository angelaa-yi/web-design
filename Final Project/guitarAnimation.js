const guitarLines=document.querySelectorAll('.guitarLines');

const guitarSoundFiles=['E4','A4','D4',
	'G4','B4','E3'];
	let guitarFiles={};

	for(let i=0; i<guitarSoundFiles.length; i++){
		const audio=new Audio(`sounds/${guitarSoundFiles[i]}.mp3`);
		guitarFiles[guitarSoundFiles[i]]=audio;
	}

	for(let i=0; i<guitarLines.length; i++){
		let sound=guitarFiles[guitarSoundFiles[i]];
		guitarLines[i].addEventListener('mouseover',function(event){
			sound.play();
		});
		setTimeout(function(){
			sound.pause();
		},500);
	}