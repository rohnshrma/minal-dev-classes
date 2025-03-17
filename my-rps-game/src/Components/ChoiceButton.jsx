import React from "react";

// A functional component that represents a button for each choice (Rock, Paper, Scissors)
const ChoiceButton = ({ choice, playGame }) => {
  return (
    <button
      // When the button is clicked, it calls the playGame function with the selected choice
      onClick={() => {
        playGame(choice);
      }}
      // Inline styles for button appearance
      style={{
        margin: "10px",
        padding: "10px 20px",
        fontSize: "32px",
        cursor: "pointer",
      }}
    >
      {choice} {/* Displays the choice on the button */}
    </button>
  );
};

export default ChoiceButton; // Exports the component for use in other files
