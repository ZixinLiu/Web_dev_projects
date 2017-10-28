var colors = [];
var numSqu = 6;
var picked;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay =  document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {
	setUpModeButton();
	setUpSquares();
	reset();
}

function setUpModeButton () {
	for(var i = 0; i < modeButton.length; ++i) {
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSqu = 3: numSqu = 6;
			reset();
		});
	}
}

function setUpSquares() {
	if(squares){
		for(var i = 0; i < squares.length; ++i){
		
			//add click listener to square
			squares[i].addEventListener("click", function(){
				var clickedColor = this.style.backgroundColor;
				if(clickedColor === picked) {
					messageDisplay.textContent = "Correct!";
					resetButton.textContent = "Play Again?";
					changeColor(picked);
					h1.style.backgroundColor = picked;
				} else {
					this.style.backgroundColor = "#232323";
					messageDisplay.textContent = "Try Again";
				}
			});
		}
	}
}




function reset() {
	colors = genColor(numSqu);
	picked = pickColor();
	colorDisplay.textContent = picked;
	// change color of square
	for(var i = 0; i < squares.length; ++i){
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display= "none";

		}
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";

}

resetButton.addEventListener("click", function(){
	reset();
});


function genColor(num) {
	// make an array
	arr = [];
	// add num random colors to array
	for(var i = 0; i < num;  i++) {
		// get random color and push it into array
		arr.push(randomColor());
	}
	// return array
	return arr;
}
function randomColor() {

	// pick red, green, blue from 0 to 255
	var ridx = Math.floor(Math.random() * 256);
	var gidx = Math.floor(Math.random() * 256);
	var bidx = Math.floor(Math.random() * 256);

	return  "rgb(" + ridx + ", " + gidx + ", " + bidx + ")"; 

}

function changeColor(color){
	for(var i = 0; i < squares.length; ++i){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	// math random return 0-1
	var idx = Math.floor(Math.random() * colors.length); 
	return colors[idx];
}