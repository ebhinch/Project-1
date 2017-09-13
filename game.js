$(() => {
    //Write a BlackJack game to try to beat the dealer. Allow the user to "Hit" or "Stand" based on their current score. Follow the common rules for BlackJack.


  

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
    let cardParameter;
    function sumDealerPoints() {
        dealerPointTotal = cardsDealtDealer.reduce((pointTotal, cardParameter) => {
            return pointTotal + cardParameter.points;
        }, 0);
        console.log(dealerPointTotal);
    }
    
    function sumPlayerPoints() {
        playerPointTotal = cardsDealtPlayer.reduce((pointTotal, cardParameter)=> {
            return pointTotal + cardParameter.points;
        }, 0);
        console.log(playerPointTotal);
    }
    
    //9. Check for Blackjack
    function blackjackCheck() {
        if (playerPointTotal === 21 && dealerPointTotal === 21) {
            console.log("player and dealer got blackjack");
            window.alert("The game is a tie! You and the dealer both got Blackjack.")
        }
        else if (playerPointTotal === 21) {
            console.log("player got blackjack");
            window.alert("Congratulations! You have Blackjack and have beat the dealer!");
        }
        else if (dealerPointTotal === 21) {
            console.log("dealer got blackjack");
            window.alert("I'm sorry! The dealer has Blackjack. You've lost the game.")
        }
    }

    //10. HIT button
    function hitButton() {
        cardsDealtPlayer.push(deck[0]);
        deck.shift();
        sumPlayerPoints();
        console.log(cardsDealtPlayer);
    }

    //11. STAY button
    function stayButton() {
        console.log(cardsDealtPlayer);        
    }

    //12. Dealer Turns
    function dealerTurns() {
        while (dealerPointTotal < 17) {
            cardsDealtDealer.push(deck[0]);
            deck.shift();
            sumDealerPoints();
            console.log(dealerPointTotal);
            console.log(cardsDealtDealer);

        }
    }

    //13. Winning Conditions
    //player > 21
    //dealer > 21
    //player = 21 blackjack
    //dealer = 21 blackjack
    //player > dealer - player wins
    //dealer > player - dealer wins

    function determineWinner() {
        if (dealerPointTotal > 21) {
            console.log("dealer busted");
        }
        if (playerPointTotal > 21) {
            console.log("player busted");
        }
        if (dealerPointTotal === 21) {
            console.log("dealer has blackjack");
        }
        if (playerPointTotal === 21) {
            console.log("player has blackjack");
        }
        if (playerPointTotal > dealerPointTotal) {
            console.log("player won");
        }
        if (dealerPointTotal > playerPointTotal) {
            console.log("dealer won");
        }
    }


    // USER INTERFACE PORTION OF CODE

    //1. DEAL BUTTON - create deck, shuffle cards, deal cards and sum point toatl when DEAL button is clicked
    let dealerPointTotal;
    let playerPointTotal;

    $("#deal-button").on("click", ($event) => {
        $event.stopPropagation();
        createDeck();
        shuffleCards(deck);
        console.log(deck);
        dealCards();
        sumDealerPoints();
        sumPlayerPoints();
        blackjackCheck();
    })

    //2. HIT BUTTON - deal another card 
    $("#hit-button").on("click", ($event) => {
        $event.stopPropagation();
        hitButton();
  
        // cardsDealtPlayer.push(deck[0]);
        // deck.shift();
        // console.log(cardsDealtPlayer);
    })

    //3. STAY BUTTON - just console.log current hand
    $("#stay-button").on("click", ($event) => {
        $event.stopPropagation();
        stayButton();
        dealerTurns();
        // add in dealer's turns
    })


    //create image folder and assign a url to each card



})