# Project-1
Project #1: Let the Games Begin

For your first project you will build a simple game as a Web Application. You may choose from one of the ideas listed below or you may choose another game with approval from one of the WDI instructors.

BLACKJACK:
- Write a BlackJack game to try to beat the dealer. Allow the user to "Hit" or "Stand" based on their current score. Follow the common rules for BlackJack.

PROJECT OBJECTIVES
The objectives of this project are to:
- Demonstrate your ability to use HTML and CSS to build and style an intuitive web application
- Demonstrate your competancy in DOM manipulation using JavaScript
- Publish your source code to GitHub with a solid README.md describing the project
- Deploy your application to a production environment such as GitHub Pages or BitBalloon
- Present your project in a presentation style format

BONUS IDEAS:

- Allow the user to place a bet (using chips, points, or dollars). Allocate a starting amount of chips and keep track of the user's chip count. If the user beats the dealer without busting, the user doubles their bet in chips. Otherwise the user loses their bet.
- Allow the user to choose from different decks of cards (e.g. different styles)
PROJECT Requirements

MY APPROACH:
- In working through our pre-work and our exercises over the first two weeks of classes, I realized that in order to really do my best possible work, organization would be key. If I can't understand my own code, I will always have problems trying to build upon it and will be more likely to create bugs. That, and attempt to make my code as DRY as possible led me to take a very organized approach in building my game. 
- I focuses on trying my best to mimic the starter code we'd seen in past homework assignments and first divide my code into sections based on user interfacing, base code, etc. Then, I focused on building all my functions out at the top and calling them as needed in the bottom portion of my code, rather than rewriting code or writing functions directly, again to keep my code as neat and DRY as possible. 

MY BONUS IDEAS:
- I improved the styling, largely with CSS. I add a gradient background that faded from green to white using the CSS gradient functionality. I also added div borders and improved font color and size to make the page more visually appealing. 
- In brainstorming our original user stories, Jamye reminded me that you have to be at least 21 to legally gamble in Vegas. While realizing incluidng any kind of age verification was likely outside of the MVP, I really liked the idea for a bonus, so I put it at the top of my Icebox list. I recalled Danny explaining that fixed positioning would really exclusively be used for paywalls, and age verification seemed similar enough to borrow the same coding. I created a div with maximum width and height and used opacity to allow the player see through the wall and into the game. Once a player has confirmed he/she is in fact 21, the wall falls and the game may begin.  
- When exploring all my other bonus ideas, after improving the CSS styling, I thought it could be fun to add some sound effects. So, using HTML and JavaScript, I added a "beep" sound effect to the age verification "YES" button and the "DEAL" button, a "deal" sound effect each time a new card was dealt, following the initial deal, and "fireworks" each time the layer beats the dealer. 
