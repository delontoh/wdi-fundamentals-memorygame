// array for cards
var cards = ["queen", "queen", "king", "king"];
// cards that are selected
var cardsInPlay = [];
// function to check for match
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You've found a match!");
	}
	else {
		console.log("Sorry, try again");
	}
};
// function to add flipped cards into play (min 2) AND check for match
var flipCard = function (cardID) {
	cardsInPlay.push(cards[cardID]);
	console.log("User flipped " + cards[cardID]);
if (cardsInPlay.length === 2) {
	checkForMatch()
} 
};

// calling flipCard function
flipCard(0);
flipCard(2);