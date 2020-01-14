var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "diamonds"
	cardImage: "images/king-of-diamonds.png"
        
}
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
}
];

let cardsInPlay = [];

function checkForMatch(){
	this.setAttribute('src',cards[cardId].cardImage);
	if (cardsInPlay[0] === cardsInPlay[1]){
	
	alert ("You found a match!");
	} else {
		alert("Sorry, try again.")
	}

	function flipCard() {
		let cardID = this.getAttribute('data-id')
		let cardThree = cards[1];
		let cardFour = cards[3];

		console.log("User Flipped " + cards[cardId].rank);
		cardsInPlay.push(cards[cardId].suit);
		checkForMatch();
	}

	function createBoard(){
		for(let i = 0; i < cards.length; i++) {
			let cardElement = document.createElement('img');
			cardElement.setAttribute('src', 'images/back.png')
			cardElement.setAttribute('data-id', i);
			cardElement.addEventListener('click', flipCard);
			document.getElementById('game-board').appendChild(cardElement);
		}
	}
	createBoard();