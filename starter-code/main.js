"use strict";
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
// A counter to keep track of players score
var score = 0;


// An empty placeholder for what will be our cards
var cardElement;


function flipCard() {
		if (this.getAttribute('data-card') === 'king'){
		this.innerHTML = "<img src='king_img.jpg'>";
	} else {
		this.innerHTML = "<img src='queen_img.jpg'>";
	}
}

var cardsInPlay = [];

var isMatch = function () {
	if (cardsInPlay[0] == cardsInPlay[1]) {
		score++;
 		return('Great! Thats a match!!!')
	} else {
		score--;
 		return("Uh Oh! The cards don't match.");
	}
};

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));

	if(cardsInPlay.length==2) {
		return(isMatch());
	}

	cardsInPlay = [];
};

var gameBoard = document.getElementById('game-board');

var deck = ['queen','queen','king','king'];

function shuffle(deck) {
  var currentIndex = deck.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
  }

  return deck;
}

var createBoard = function() {
	var cards = shuffle(deck);
	for(var i=0;i<cards.length;i++) {
		cardElement=document.createElement('div');
		cardElement.className = 'card';
		gameBoard.appendChild(cardElement);
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', flipCard);
		cardElement.addEventListener('click', isTwoCards);
	}
};

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if(cardsInPlay.length==2) {
		alert(isMatch() + " Your total score is " + score);
		gameBoard.innerHTML = "";
		createBoard();
		cardsInPlay = [];
	}
};

createBoard();
