$(() => {
    //Write a BlackJack game to try to beat the dealer. Allow the user to "Hit" or "Stand" based on their current score. Follow the common rules for BlackJack.

    // Age Check
    //minimum age is 21 years old
    const minimumAge = {
        ageCheck: function () {

        }
    };

    //GAME SETUP PORTION

    //1. Create card deck
    //create array of suits

    const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];

    //2. Ceate array of card values
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

    //3. Create empty card deck array to hold deck of cards
    let deck = [];

    //4. Create deck function creates a card deck and assigns each card a suit, value and points

    function createDeck() {
        //create one array where cards' values will live (1, 2, Q, K...)
        for (let i = 0; i < values.length; i++) {
            //create another array where cards' suits will live (Spades, Diamonds...)
            for (let j = 0; j < suits.length; j++) {

                //set jack, queen and king to 10 points
                // define "points" variable as the point value of each card
                let points = parseInt(values[i]);
                if (values[i] === "J" || values[i] === "Q" || values[i] === "K") {
                    points = 10;
                }

                //set ace to 11 points
                else if (values[i] === "A") {
                    points = 11;
                }

                //set all other cards to their face value
                else {
                    points = values[i]
                };

                //push value, suit and points to an array now comprising entire deck of cards
                let card = {
                    value: values[i],
                    suit: suits[j],
                    points: points
                };

                deck.push(card);
                console.log(i);
            }
        };
    }

    //5. Shuffle cards
    function shuffleCards() {

        //switch cards between one location and another
        //use Math.floor to find random indexes within deck array. Math.floor will generate a number between 0 and 1 (not including 1)

        console.log("Deck length: " + deck.length)
        
        for (let i = 0; i < 1000; i++) {
            //set location of first card
            let location1 = Math.floor((Math.random() * deck.length));

            //set location of second card
            let location2 = Math.floor((Math.random() * deck.length));

            //switch location1 and location 2 - thus shuffling the cards
            let shuffledLocation = deck[location1];
            deck[location1] = deck[location2];
            deck[location2] = shuffledLocation;

        }
    }


    //6. Create players

    //create player array to save player ID and track respective player score and cards currently dealt

    let cardsDealtPlayer = [];
    let cardsDealtDealer = [];
    function establishPlayers(numberOfPlayers) {

        //assign each player either "player 1" or "player 2" and save cards currently in hand to array
        for (let i = 0; i <= numberOfPlayers; i++) {

            //set "player 1" to always be player
            if (i === 0) {
                let player = {
                    name: "Player",
                    points: 0,
                    hand: cardsDealtPlayer
                }
                cardsDealtPlayer.push(player);
            }

            //set "player 2" to always be dealer
            else {
                let player = {
                    name: "Dealer",
                    points: 0,
                    hand: cardsDealtDealer
                };
                cardsDealtDealer.push(player);
            }
        }
    }

    //7. Deal Cards
    function dealCards()  {
        for (let i = 0; i < 2; i++) {
            cardsDealtPlayer.push(deck[0]);
            deck.shift();
            cardsDealtDealer.push(deck[0]);
            deck.shift();
        }
        console.log(cardsDealtDealer);
        console.log(cardsDealtPlayer);
    }

    //8. Sum Point Totals
    function sumPoints() {
        dealerPointTotal = cardsDealtDealer[0].points + cardsDealtDealer[1].points;
        playerPointTotal = cardsDealtPlayer[0].points + cardsDealtPlayer[1].points;
        console.log(dealerPointTotal);
        console.log(playerPointTotal);
    }


    // USER INTERFACE PORTION OF CODE

    //1. Deal cards
    let dealerPointTotal;
    let playerPointTotal;

    //add event listener - when "deal" is clicked, create deck, shuffle cards, and then deal cards
    $("#deal-button").on("click", ($event) => {
        $event.stopPropagation();
        createDeck();
        shuffleCards(deck);
        console.log(deck);
        dealCards();
        sumPoints();
    })


    //3. Add event listener to "Hit"
    $("#hit-button").on("click", ($event) => {
        $event.stopPropagation();
        cardsDealtPlayer.push(deck[0]);
        deck.shift();
        console.log(cardsDealtPlayer);
    })

    //4. Add event listener to "Stay"
    $("#stay-button").on("click", ($event) => {
        $event.stopPropagation();
        console.log(cardsDealtPlayer);
    })



    // 5 and 6. Determine whether dealer will "hit" or "stay"
   
    if (dealerPointTotal <= 11) {
        //hit
    }

    else if (dealerPointTotal >= 17) {
        //stay
    }

    //7. evaluate winner 


    //alert player has won
    // window.alert("Congratulations, Player! You have won Blackjack");

    // alert dealer has won
    // window.alert("I'm sorry, Player. The dealer has won this round of Blackjack.");

    //create image folder and assign a url to each card



})