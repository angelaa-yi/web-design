const musicNotesPic=document.querySelectorAll('.musicNotesPic');
const frame=document.getElementById('frame');

let positionHorizontal1=0;
let positionVertical1=0;
let animation=requestAnimationFrame(moveMusic);

function moveMusic() {
	animation=requestAnimationFrame(moveMusic);

	if(positionVertical1<700 && positionHorizontal1<1490){
		positionVertical1+=2;
		positionHorizontal1+=3.6;
		musicNotesPic[1].style.top=`${positionVertical1}px`;
		musicNotesPic[1].style.left=`${positionHorizontal1}px`;
	}
	else{
		positionHorizontal1=-50;
		positionVertical1=-50;
	}
}

stopAnimation=()=>cancelAnimationFrame(animation);
startAnimation=()=>animation=requestAnimationFrame(moveMusic);

frame.addEventListener('pointerover', stopAnimation);
frame.addEventListener('pointerout',startAnimation);


let positionHorizontal2=1490;
let positionVertical2=700;
let animation2=requestAnimationFrame(moveMusic2);

function moveMusic2() {
	animation2=requestAnimationFrame(moveMusic2);

	if(positionVertical2>0 && positionHorizontal2>0){
		positionVertical2-=1.5;
		positionHorizontal2-=2;
		musicNotesPic[2].style.top=`${positionVertical2}px`;
		musicNotesPic[2].style.left=`${positionHorizontal2}px`;
	}
	else{
		positionHorizontal2=1490;
		positionVertical2=700;
	}
}

stopAnimation2=()=>cancelAnimationFrame(animation2);
startAnimation2=()=>animation2=requestAnimationFrame(moveMusic2);

frame.addEventListener('pointerover', stopAnimation2);
frame.addEventListener('pointerout',startAnimation2);


let positionHorizontal3=750;
let positionVertical3=300;
let animation3=requestAnimationFrame(moveMusic3);

function moveMusic3() {
	animation3=requestAnimationFrame(moveMusic3);

	if(positionVertical3>0 && positionHorizontal3>0){
		positionVertical3-=1;
		positionHorizontal3-=1;
		musicNotesPic[0].style.top=`${positionVertical3}px`;
		musicNotesPic[0].style.left=`${positionHorizontal3}px`;
	}
	else{
		positionHorizontal3=1490;
		positionVertical3=700;
	}
}

stopAnimation3=()=>cancelAnimationFrame(animation3);
startAnimation3=()=>animation3=requestAnimationFrame(moveMusic3);

frame.addEventListener('pointerover', stopAnimation3);
frame.addEventListener('pointerout',startAnimation3);



// different music pic
const musicPic=document.querySelectorAll('.musicPic');

let positionHorizontal4=90;
let positionVertical4=130;
let animation4=requestAnimationFrame(moveMusic4);

function moveMusic4() {
	animation4=requestAnimationFrame(moveMusic4);

	if(positionVertical4<700 && positionHorizontal4<1490){
		positionVertical4+=1;
		positionHorizontal4+=5;
		musicPic[0].style.top=`${positionVertical4}px`;
		musicPic[0].style.left=`${positionHorizontal4}px`;
	}
	else{
		positionHorizontal4=-50;
		positionVertical4=-50;
	}
}

stopAnimation4=()=>cancelAnimationFrame(animation4);
startAnimation4=()=>animation4=requestAnimationFrame(moveMusic4);

frame.addEventListener('pointerover', stopAnimation4);
frame.addEventListener('pointerout',startAnimation4);


let positionHorizontal5=1490;
let positionVertical5=500;
let animation5=requestAnimationFrame(moveMusic5);

function moveMusic5() {
	animation5=requestAnimationFrame(moveMusic5);

	if(positionVertical5>0 && positionHorizontal5>0){
		positionVertical5-=2;
		positionHorizontal5-=3;
		musicPic[1].style.top=`${positionVertical5}px`;
		musicPic[1].style.left=`${positionHorizontal5}px`;
	}
	else{
		positionHorizontal5=1600;
		positionVertical5=450;
	}
}

stopAnimation5=()=>cancelAnimationFrame(animation5);
startAnimation5=()=>animation5=requestAnimationFrame(moveMusic5);

frame.addEventListener('pointerover', stopAnimation5);
frame.addEventListener('pointerout',startAnimation5);


let positionHorizontal6=0;
let positionVertical6=500;
let animation6=requestAnimationFrame(moveMusic6);

function moveMusic6() {
	animation6=requestAnimationFrame(moveMusic6);

	if(positionVertical6>0 && positionHorizontal6<1490){
		positionVertical6-=2;
		positionHorizontal6+=3;
		musicPic[2].style.top=`${positionVertical6}px`;
		musicPic[2].style.left=`${positionHorizontal6}px`;
	}
	else{
		positionHorizontal6=0;
		positionVertical6=500;
	}
}

stopAnimation6=()=>cancelAnimationFrame(animation6);
startAnimation6=()=>animation6=requestAnimationFrame(moveMusic6);

frame.addEventListener('pointerover', stopAnimation6);
frame.addEventListener('pointerout',startAnimation6);