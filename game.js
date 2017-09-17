$(() => {
    //Write a BlackJack game to try to beat the dealer. Allow the user to "Hit" or "Stand" based on their current score. Follow the common rules for BlackJack.

    //GAME SETUP PORTION
    let cardsDealtDealer = [];
    let cardsDealtPlayer = [];
    let cardParameter;

    //1. Create card deck
    //create array of suits

    const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];

    //2. Ceate array of card values
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];

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
                if (values[i] === "Jack" || values[i] === "Queen" || values[i] === "King") {
                    points = 10;
                }

                //set ace to 11 points
                else if (values[i] === "Ace") {
                    points = 11;
                }

                //set all other cards to their face value
                else {
                    points = values[i];
                };

                //push value, suit and points to an array now comprising entire deck of cards
                //drop cardImageSource into source using interpolation
                let card = {
                    value: values[i],
                    suit: suits[j],
                    points: points,
                    cardImageSource: "PNG-cards-1.3/" + values[i] + "_of_" + suits[j] + ".png"
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

    //7. Deal Cards
    function dealCards() {
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
  

    // dealer
    function sumDealerPoints() {
        dealerPointTotal = cardsDealtDealer.reduce((pointTotal, cardParameter) => {
            return pointTotal + cardParameter.points;
        }, 0);
        console.log(dealerPointTotal);
    }
    //player
    function sumPlayerPoints() {
        playerPointTotal = cardsDealtPlayer.reduce((pointTotal, cardParameter) => {
            return pointTotal + cardParameter.points;
        }, 0);
        console.log(playerPointTotal);
    }

    //9. Check for Blackjack
    function blackjackCheck() {
        if (playerPointTotal === 21 && dealerPointTotal === 21) {
            console.log("player and dealer got blackjack");
            setTimeout(function(){ alert("The game is a tie! You and the dealer both got Blackjack."); }, 1000);
        }
        else if (playerPointTotal === 21) {
            console.log("player got blackjack");
            setTimeout(function(){ alert("Congratulations! You have Blackjack and have beat the dealer!"); }, 400);
            setTimeout(function() {document.getElementById("win").play(); }, 500);
        }
        else if (dealerPointTotal === 21) {
            console.log("dealer got blackjack");
            setTimeout(function(){ alert("I'm sorry! The dealer has Blackjack. You've lost the game."); }, 1000);
        }
    }

    //10. Check for Bust
    function bustCheck() {
        if (playerPointTotal > 21 && dealerPointTotal > 21) {
            console.log("player and dealer bust");
            setTimeout(function(){ alert("Uh oh. You and the dealer both busted."); }, 1000);
        }
        else if (playerPointTotal > 21) {
            console.log("player bust");
            setTimeout(function(){ alert("Uh oh, player. You've gone bust. Dealer wins."); }, 1000);
        }
        else if (dealerPointTotal > 21) {
            console.log("dealer bust");
            setTimeout(function(){ alert("The dealer's gone bust. Player wins."); }, 1000);
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
            document.getElementById("deal").play();            
            deck.shift();
            showDealerCardHit();
            sumDealerPoints();
            console.log("These are the dealer cards " + cardsDealtDealer);
            console.log(dealerPointTotal);
        }
    }

    //13. Winning Conditions
    function determineWinner() {
        if (dealerPointTotal > 21 && playerPointTotal > 21) {
            console.log("player and dealer busted");
            setTimeout(function(){ alert("Uh oh. You and the dealer both busted."); }, 1000);
        }
        else if (dealerPointTotal > 21 && playerPointTotal <= 21) {
            console.log("dealer busted");
            setTimeout(function(){ alert("Lucky duck. The dealer has busted, and you have won."); }, 400);
            setTimeout(function() {document.getElementById("win").play(); }, 500);
            
        }
        else if (playerPointTotal > 21 && dealerPointTotal <= 21) {
            console.log("player busted");
            setTimeout(function(){ alert("I'm sorry. You have busted, and the dealer has won."); }, 1000);
        }

        else if (dealerPointTotal === 21 && playerPointTotal === 21) {
            console.log("player and dealer both have 21. game tied.");
            setTimeout(function(){ alert("Congrats, you got 21 points, but....so did the dealer. The game's a tie."); }, 1000);
        }
        else if (dealerPointTotal === 21) {
            console.log("dealer has blackjack");
            setTimeout(function(){ alert("I'm sorry, The dealer has 21 points and has won the game."); }, 1000);
        }
        else if (playerPointTotal === 21) {
            console.log("player has blackjack");
            setTimeout(function(){ alert("YAHOO! You have 21 points and have won!"); }, 400);
            setTimeout(function() {document.getElementById("win").play(); }, 500);
            
        }
        else if (playerPointTotal > dealerPointTotal) {
            console.log("player won");
            setTimeout(function(){  alert("LA DEE DA! YOU WON BLACKJACK!"); }, 400);
            setTimeout(function() {document.getElementById("win").play(); }, 500);
            
        }
        else if (dealerPointTotal > playerPointTotal) {
            console.log("dealer won");
            setTimeout(function(){ alert("Sorry, chickadee. The dealer beatcha."); }, 1000);

        }
        else if (dealerPointTotal === playerPointTotal) {
            console.log("dealer and player tied");
            setTimeout(function(){alert("Well this is anticlimactic. The game's a tie.");}, 1000);
        }
    }

    //14. Card Image Appearance 
    //14A. player deal button
    function showPlayerCardDeal(source) {
        for (let i = 0; i < 2; i++) {
            const cardToShow = cardsDealtPlayer[i];
            const $newCard = $("<div></div>");
            $("#player-jumbotron").append(`<img class="playerCard" src=${cardsDealtPlayer[i].cardImageSource}>`);
        }
    };

    //14B. player hit button 
    function showPlayerCardHit(source) {
        for (let i = 0; i < 1; i++) {
            const cardToShow = cardsDealtPlayer[i];
            const $newCard = $("<div></div>");
            $("#player-jumbotron").append(`<img class="playerCard" src=${cardsDealtPlayer[cardsDealtPlayer.length - 1].cardImageSource}>`);
        }
    };

    //14C. dealer deal
    function showDealerCardDeal(source) {
        for (let i = 0; i < 2; i++) {
            const cardToShow = cardsDealtDealer[i];
            const $newCard = $("<div></div>");
            $("#dealer-jumbotron").append(`<img class="dealerCard" src=${cardsDealtDealer[i].cardImageSource}>`);
        }
    };

    //14D. dealer hit
    function showDealerCardHit(source) {
        for (let i = 0; i < 1; i++) {
            const cardToShow = cardsDealtDealer[i];
            const $newCard = $("<div></div>");
            $("#dealer-jumbotron").append(`<img class="dealerCard" src=${cardsDealtDealer[cardsDealtDealer.length - 1].cardImageSource}>`);
        }
    };

    //15. AGE WALL POPUPS
    //15A. age popup too young
    function tooYoung() {
        alert("We're sorry. You must be at least 21 years old to play Brooks' Blackjack. Please come back when you're of age.");
    }

    //15B. age popup too old
    function oldEnough() {
        $("#ageWall").remove();
        alert("Welcome to Brooks' Blackjack. Let's get this game underway!");

    }

    // USER INTERFACE PORTION OF CODE

    //1. DEAL BUTTON - create deck, shuffle cards, deal cards and sum point toatl when DEAL button is clicked
    let dealerPointTotal;
    let playerPointTotal;

    $("#deal-button").on("click", ($event) => {
        $("#deal-button").prop ("disabled", true);
        document.getElementById("beep").play();        
        console.log(deck);
        $event.stopPropagation();
        createDeck();
        shuffleCards(deck);
        console.log(deck);
        dealCards();
        showPlayerCardDeal();
        sumPlayerPoints();
        showDealerCardDeal();
        sumDealerPoints();
        blackjackCheck();
        bustCheck();
    })


    //2. HIT BUTTON - deal another card 
    $("#hit-button").on("click", ($event) => {
        $event.stopPropagation();
        document.getElementById("deal").play();        
        hitButton();
        showPlayerCardHit();
        blackjackCheck();
        bustCheck();
        showDealerCard();
    })

    //3. STAY BUTTON - just console.log current hand
    $("#stay-button").on("click", ($event) => {
        $("#stay-button").prop("disabled", true);
        $event.stopPropagation();
        stayButton();
        dealerTurns();
        determineWinner();
    })

    //4. BUILD AGE VERIFICATION WALL
    $("#ageWall").prependTo($("body"));

    //4A. RUN AGE WALL NO BUTTON
    $("#ageNo").on("click", ($event) => {
        $event.stopPropagation();
        tooYoung();
    })

    //4B. RUN AGE WALL YES BUTTON
    $("#ageYes").on("click", ($event) => {
        document.getElementById("beep").play();                
        $event.stopPropagation();
        oldEnough();        
    })


})




