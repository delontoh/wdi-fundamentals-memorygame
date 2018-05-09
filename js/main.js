// array for cards
var cards = [
{
 rank: "queen",
 suit: "hearts",
 cardImage: "images/queen-of-hearts.png"
},
{
 rank: "queen",
 suit: "diamonds",
 cardImage: "images/queen-of-diamonds.png"	
},
{
 rank: "king",
 suit: "hearts",
 cardImage: "images/king-of-hearts.png" 	
},
{
 rank: "king",
 suit: "diamonds",
 cardImage: "images/king-of-diamonds.png"	
},
];
// cards that are selected
var cardsInPlay = [];
// function to check for match
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You've found a match!");
		alert("You've found a match!");
	}
	else {
		console.log("Sorry, try again");
		alert("Sorry, try again");
	}
};
// function to add flipped cards into play (min 2) AND check for match
var flipCard = function() {
	var cardID = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardID].rank);
	console.log("User flipped " + cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
	this.setAttribute('src', cards[cardID].cardImage);

if (cardsInPlay.length === 2) {
	checkForMatch()
} 
};
// create new game board
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

// calling createBoard function argument
createBoard();