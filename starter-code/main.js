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

var achievedGold;



// An empty placeholder for what will be our cards
var cardElement;

var wonRound;

//var text = document.getElementsById('message').innerHTML;


// A special message and background for players with a score of 10
var goldStatus = function() {

    if (score >= 10) {
        if (achievedGold == undefined || achievedGold == false) {
            alert("Congratulations, oh Master! You have reached a score of 10 and achieved gold status! Relish in all that is your glory!!!")
        };
        document.body.style.backgroundImage = "url('gold_background.jpg')";
        achievedGold = true;
    } else {
        document.body.style.backgroundImage = "url('background_img.jpg')";
        achievedGold = false;
    };


	// if (achievedGold == undefined) {
	// 	document.body.style.backgroundImage = "url('gold_background.jpg')";
 //        achievedGold = true;
	// alert("Congratulations, oh Master! You have reached a score of 10 and achieved gold status! Relish in all that is your glory!!!")
	// };
};



var gameBoard = document.getElementById('game-board');

function flipCard() {
	var flipped = this.getAttribute('data-flipped');
	if (flipped !== 'true'){
		if (this.getAttribute('data-card') === 'king'){
			this.innerHTML = "<img src='king_img.jpg'>";
		} else if (this.getAttribute('data-card') === 'queen') {
			this.innerHTML = "<img src='queen_img.jpg'>";
		} else {
			this.innerHTML = "<img src='ace_of_spades.png'>";
		}
		this.setAttribute('data-flipped','true');
			isTwoCards(this);
	} else {
		alert("You flipped this card already. Please pick another one.");
	}

}

var cardsInPlay = [];

var isMatch = function () {
	if (cardsInPlay[0] == cardsInPlay[1]) {
		wonRound = true;
		score+=3;
        document.getElementById('totalScore').innerHTML = 'Total Score:' + score;
        document.getElementById('message').innerHTML = "Great! Thats a match!!!";
        document.getElementById('message').className="green";
		goldStatus();
	} else {
		wonRound = false;
		score--;
        document.getElementById('totalScore').innerHTML = "Total Score:" + score;
        document.getElementById('message').innerHTML = "Uh Oh! Those two cards don't match.";
        document.getElementById('message').className="red";
        goldStatus();
	}
};

var isTwoCards = function(object) {
	cardsInPlay.push(object.getAttribute('data-card'));
	if(cardsInPlay.length==2) {
        isMatch();
		gameBoard.innerHTML = "";
		createBoard();
		cardsInPlay = [];
	}
};



var deck = ['queen','queen','king','king','ace','ace'];

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

/***ToDo: 
Find a way to shuffle cards, so the 1st round isn't always the same.
*****/

var createBoard = function() {
	var cards;
	if (wonRound) {
		cards=shuffle(deck);
	} else {
		cards=deck;
	}
	for(var i=0;i<cards.length;i++) {
		cardElement=document.createElement('div');
		cardElement.className = 'card';
		gameBoard.appendChild(cardElement);
		cardElement.setAttribute('data-card', cards[i]);		
		cardElement.addEventListener('click', flipCard);
	}
};

createBoard();







