README (Flow & Code Order Explanation)

Project Overview

This is a simple Rock, Paper, Scissors game built using React. The user selects one of the three options, and the computer randomly selects one as well. The result is then displayed.

Code Flow and Order 1. App.js (Root Component)
• Renders the Game component inside a <h1> tag. 2. Game.js (Main Game Logic)
• Defines possible choices (Rock, Paper, Scissors).
• Manages state (userChoice, compChoice, result).
• Contains the playGame function to determine the result.
• Renders ChoiceButton components for user selection.
• Displays the Result component when a choice is made. 3. ChoiceButton.js (Button Component)
• Displays a button for each choice.
• Calls playGame function when clicked. 4. Result.js (Displays Results)
• Shows the choices made by the user and the computer.
• Displays the game result.

How the Game Works 1. The user clicks on Rock, Paper, or Scissors. 2. The playGame function is triggered, setting:
• User’s choice
• Computer’s choice (random selection)
• Result based on game rules 3. The Result component displays the choices and result. 4. The game can be played again by clicking a different button.
