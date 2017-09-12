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
    //assigns all aces "11"

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
                if (values[i] === "A") {
                    points = 11;
                }

                //set all other cards to their face value
                else {
                    points = values[i]
                };

                //push value, suit and points to an array now comprising entire deck of cards
                let card = { Value: values[i], Suit: suits[j], Points: points };
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
            // console.log(deck[location1]);
        }
    }

    //6. Create players

    //create player array to save player ID and track respective player score and cards currently dealt

    function establishPlayers(numberOfPlayers) {
        let playerDataArray = [];
        //assign each player either "player 1" or "player 2" and save cards currently in hand to array
        for (let i = 0; i <= numberOfPlayers; i++) {
            let cardsDealt = [];

            //set "player 1" to always be player
            if (i === 0) {
                let player = { Name: "Player", Points: 0, Hand: cardsDealt }
                playerDataArray.push(player);
            }

            //set "player 2" to always be dealer
            else {
                let player = { Name: "Dealer", Points: 0, Hand: cardsDealt };
                playerDataArray.push(player);
            }
        }
    }

    // USER INTERFACE PORTION OF CODE

    //1. Deal cards

    //add event listener - when "deal" is clicked, deal cards
    $("#deal-button").on("click", ($event) => {
        $event.stopPropagation();
        createDeck();
        shuffleCards(deck);
        console.log(deck);
    })


// to deal use pop


    //8. Score players' hands
    // var arr = ["20.0","40.1","80.2","400.3"],
    // sum = 0;
    // $.each(arr,function(){sum+=parseFloat(this) || 0;});



    // <script>
    // var numbers = [15.5, 2.3, 1.1, 4.7];

    // function getSum(total, num) {
    //     return total + Math.round(num);
    // }
    // function myFunction(item) {
    //     document.getElementById("demo").innerHTML = numbers.reduce(getSum, 0);
    // }
    // </script>



    //alert player has won
    // window.alert("Congratulations, Player! You have won Blackjack");

    // alert dealer has won
    // window.alert("I'm sorry, Player. The dealer has won this round of Blackjack.");

    //create image folder and assign a url to each card



})