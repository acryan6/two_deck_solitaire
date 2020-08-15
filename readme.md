<h2>Summary</h2>

Mini-moo is a two-deck solitaire game built with React, React-dnd, Redux, Immutable.js, Node, Express, and Deck of Cards API.

<h2>Objective</h2>

The goal of the game, as in most solitaire games, is to aggregate suits of cards into piles. Mini-moo has two piles per suit, one increasing from Ace to King and one decreasing from King to Ace.

<h2>Game-play</h2>

<h4>Board overview</h4>

On the 'game board' is located two rows of seven piles of cards. The pile names correspond to card values. The first row has piles Ace through seven (e.g. row 1 pile 1 is the Ace pile, row 1 pile 5 is the 5 pile). The second row below it has 8 through King with the draw stack located after the 10 pile and before the Jack pile.

<h4>Dealing</h4>

Manual dealing functionality to come at a later date. Dealing is done by laying down all 104 cards onto the board in a specific order. Overall, one card is laid down at a time in increasing order from the Ace pile to the King pile. Cards are placed face-down into the draw stack based on a few different scenarios:

- One card is placed into the draw stack after a card is laid down in the 10 pile and the King pile
- One card is placed into the draw stack if the value of the card laid down matches the pile it is being placed into (e.g. a Jack of hearts placed into the Jack pile)
- One card is placed into the draw stack for every King that is placed face-up anywhere on the board
- Two cards are placed into the draw stack for every Ace that is placed face-up anywhere on the board

These scenarios are additive. For instance, if a King is placed in the King pile, three cards should be placed into the draw stack. One card for being a King, one card for being 'in its place' (King in a King pile), and one card that always comes after the King pile.

<h4>Placing into aggregate piles</h4>

Cards may be placed into the aggregate piles to complete the game objective in two ways:

- Any card on top of the board piles is fair game to move into your aggregate piles
- Any card in your hand is fair game (explained below)

Game-play is designed to accept either double clicking on the card you want to put into an aggregate pile or by dragging the card and dropping it into the aggregate pile. When you come to a point where you must choose whether you want to continue the pile going up or down (e.g. if you have an 8 going down and a 6 going up), double clicking will not work. Instead, drag and drop the card to the pile you want to continue.

<h4>Drawing a card</h4>

When ready, pick up a card from the draw stack by double clicking the pile. The value of the card determines what pile to pick up into your hand (e.g. picking a 6 up from the draw stack allows you to pick up the 6 pile into your hand). You may then use any card in your hand. The card most recently picked up from the draw stack will then go on top of the pile. Clicking on the draw stack again will return the pile, draw a new card, and display it in your hand.

<h4>Scoring</h4>

Mini-moo is an extremely tough game to win. Scoring is done when the draw stack in empty and no more valid moves can be played. The remaining cards on the game board are counted as a point each, and five points are subtracted for every completed aggregate pile. The lowest score possible is -40. Good luck!
