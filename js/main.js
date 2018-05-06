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
 rank: "kings",
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
var flipCard = function (cardID) {
	cardsInPlay.push(cards[cardID].rank);
	console.log("User flipped " + cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
if (cardsInPlay.length === 2) {
	checkForMatch()
} 
};

// calling flipCard function
flipCard(0);
flipCard(2);