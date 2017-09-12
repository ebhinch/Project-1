//Write a BlackJack game to try to beat the dealer. Allow the user to "Hit" or "Stand" based on their current score. Follow the common rules for BlackJack.

// Age Check
//minimum age is 21 years old
const minimumAge = {
    ageCheck: function () {

    }
};

//Create card deck
//1. Create array of suits
const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];

//2. Ceate array of card values
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

//3. Create empty card deck array to hold deck of cards
let deck = [];

//4. Create deck function creates a card deck and assigns each card a suit, value and point weight
//assigns all aces "11"

function createDeck() {
   
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < suits.length; j++) {
            //set jack, queen and king to 10 points
            let weight = parseInt(values[i]);
            if (values[i] === "J" || values[i] === "Q" || values[i] === "K") {
                weight = 10;
            }
            //set ace to 11 points
            if (values[i] === "A") {
                weight = 11;
            }
            //set all other cards to their face value
            else {
                weight = values[i]
            };

            //push value, suit and weight to an array
            let card = { Value: values[i], Suit: suits[j], Weight: weight };
            deck.push(card);
        }
    };
}

//Shuffle cards
function shuffleCards() {
    //switch cards between one location and another
    //use Math.floor to find random indexes within deck array
    for (let i = 0; i < 1000; i++) {
        let location1 = Math.floor((Math.random() * deck.length));

        let location2 = Math.floor((Math.random() * deck.length));

        let shuffledLocation = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = shuffledLocation;
        console.log(deck[location1]);
    }
}

//create players

//create player array to save player ID and track respective player score and cards currently dealt

function establishPlayers(numberOfPlayers) {
    let playerDataArray = [];
    //assign each player either "player 1" or "player 2" and save cards currently in hand to array
    for (let i = 0; i <= numberOfPlayers; i++) {
        let cardsDealt = [];
        //set "player 1" to always be player
        if (i === 0) {
            let player = { Name: "Player", ID: (i + 1), Points: 0, Hand: cardsDealt }
            playerDataArray.push(player);
        }
        //set "player 2" to always be dealer
        else {
            let player = { Name: "Dealer", ID: (i + 2), Points: 0, Hand: cardsDealt };
            playerDataArray.push(player);
        }
    }
}
//alert player is 21

//alert player has won

// alert dealer has won

//create image folder and assign a url to each card