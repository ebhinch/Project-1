//Write a BlackJack game to try to beat the dealer. Allow the user to "Hit" or "Stand" based on their current score. Follow the common rules for BlackJack.

// Age Check
//minimum age is 21 years old
const minimumAge = {
    ageCheck: function() {

    }
};

//Create card deck
const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const deck = new Array();

function createDeck() {
    deck = new Array()
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < suits.length; j++) {
            let weight = parseInt(values[i]);
            if (values[i] === "J" || values[i] === "Q" || values[i] === "K") {
                weight = 10;
            }
            if (values[i] = "A") {
                weight = 11;
            }
            else (weight = values[i]);
            //push value, suit and weight to an array
            let card = { Value: values[i], Suit: suits[j], Weight: weight};
            deck.push(card);
        }
    };
}

//randomiz order cards are dealt in