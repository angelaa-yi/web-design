const yayParent=document.querySelector('.yayParent');
const cuteParent=document.querySelector('.cuteParent');
const keyboards=document.querySelectorAll('.keyboard');
const keyboardFlats=document.querySelectorAll('.keyboardFlat');

const c= new Audio('sounds/c.mp3');

setTimeout(
	function(){
		yayParent.children[9].style.backgroundColor='yellow';
	},
500 );

setTimeout(
	function(){
		yayParent.children[9].style.backgroundColor='white';
	},
700 );

setTimeout(
	function(){
		yayParent.children[9].style.backgroundColor='yellow';
	},
900 );

setTimeout(
	function(){
		yayParent.children[10].style.backgroundColor='yellow';
		yayParent.children[9].style.backgroundColor='white';
	},
1100 );

setTimeout(
	function(){
		yayParent.children[11].style.backgroundColor='yellow';
		yayParent.children[10].style.backgroundColor='white';
	},
1300 );

setTimeout(
	function(){
		yayParent.children[11].style.backgroundColor='white';
	},
1500 );

setTimeout(
	function(){
		yayParent.children[11].style.backgroundColor='yellow';
	},
1700 );

setTimeout(
	function(){
		yayParent.children[10].style.backgroundColor='yellow';
		yayParent.children[11].style.backgroundColor='white';
	},
1900 );

setTimeout(
	function(){
		yayParent.children[9].style.backgroundColor='yellow';
		yayParent.children[10].style.backgroundColor='white';
	},
2100 );

setTimeout(
	function(){
		yayParent.children[8].style.backgroundColor='yellow';
		yayParent.children[9].style.backgroundColor='white';
	},
2300 );

setTimeout(
	function(){
		yayParent.children[7].style.backgroundColor='yellow';
		yayParent.children[8].style.backgroundColor='white';
	},
2500 );

setTimeout(
	function(){
		yayParent.children[7].style.backgroundColor='white';
	},
2700 );

setTimeout(
	function(){
		yayParent.children[7].style.backgroundColor='yellow';
	},
2900 );

setTimeout(
	function(){
		yayParent.children[7].style.backgroundColor='white';
		yayParent.children[8].style.backgroundColor='yellow';
	},
3100 );

setTimeout(
	function(){
		yayParent.children[8].style.backgroundColor='white';
		yayParent.children[9].style.backgroundColor='yellow';
	},
3300 );

setTimeout(
	function(){
		yayParent.children[9].style.backgroundColor='white';
	},
3500 );

setTimeout(
	function(){
		yayParent.children[9].style.backgroundColor='yellow';
	},
3700 );

setTimeout(
	function(){
		yayParent.children[9].style.backgroundColor='white';
		yayParent.children[8].style.backgroundColor='yellow';
	},
4000 );

setTimeout(
	function(){
		yayParent.children[8].style.backgroundColor='white';
	},
4200 );

setTimeout(
	function(){
		yayParent.children[8].style.backgroundColor='yellow';
		newLink.style.display='block';
	},
4400 );

function playKeyboard(event){
	event.target.style.backgroundColor='yellow';
	c.play();

	setTimeout(
		function(){
			event.target.style.backgroundColor='white';
		},
	500 );
}

function playKeyboardFlats(event){
	event.target.style.backgroundColor='yellow';
	c.play();

	setTimeout(
		function(){
			event.target.style.backgroundColor='black';
		},
	500 );
}

for(let i=0; i<keyboards.length; i++){
	keyboards[i].addEventListener('click', playKeyboard);
}

for (let i=0;i<keyboardFlats.length; i++){
	keyboardFlats[i].addEventListener('click', playKeyboardFlats);
}