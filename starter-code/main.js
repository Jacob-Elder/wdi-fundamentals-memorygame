/*
console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


if (cardTwo === cardFour) {
alert("You found a match!")
} else {
	alert ("Sorry, try again.")
};
*/

var gameBoard = document.getElementById('game-board');


var createBoard = function() {

for(var i=0;i<4;i++) {
	var cardElement=document.createElement('div');
	cardElement.className = 'card';
	gameBoard.appendChild(cardElement);
}

};

createBoard();