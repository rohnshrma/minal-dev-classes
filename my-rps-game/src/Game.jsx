import React, { useState } from "react"; // Import React and useState hook
import ChoiceButton from "./Components/ChoiceButton"; // Import the ChoiceButton component
import Result from "./Components/Result"; // Import the Result component

const Game = () => {
  // Possible choices in the game
  const choices = ["Rock", "Paper", "Scissors"];

  // State to store user choice, computer choice, and result
  const [userChoice, setUserChoice] = useState("");
  const [compChoice, setCompChoice] = useState("");
  const [result, setResult] = useState("");

  // Function to handle game logic
  const playGame = (userChoice) => {
    const randomIndex = Math.floor(Math.random() * 3); // Random index for computer choice
    const comp = choices[randomIndex]; // Get computer's choice
    setCompChoice(comp); // Update computer's choice state
    setUserChoice(userChoice); // Update user's choice state

    // Determine game result based on user choice and computer choice
    if (userChoice === comp) {
      setResult("It's a Tie!");
    } else if (
      (userChoice === "Rock" && comp === "Scissors") ||
      (userChoice === "Paper" && comp === "Rock") ||
      (userChoice === "Scissors" && comp === "Paper")
    ) {
      setResult("You Win! 🥳");
    } else {
      setResult("You Lose! 😭");
    }
  };

  return (
    <div>
      {/* Render buttons for each choice */}
      <div>
        {choices.map((choice) => (
          <ChoiceButton key={choice} choice={choice} playGame={playGame} />
        ))}
      </div>

      {/* Display result only if user has made a choice */}
      {userChoice && (
        <Result
          userChoice={userChoice}
          computerCoice={compChoice}
          result={result}
        />
      )}
    </div>
  );
};

export default Game; // Exports the Game component
