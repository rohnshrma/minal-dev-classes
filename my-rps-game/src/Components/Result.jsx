import React from "react";

// Functional component to display the game result
const Result = ({ userChoice, computerCoice, result }) => {
  console.log(userChoice, computerCoice, result); // Logs choices and result to console

  return (
    <div>
      <h2>You Chose : {userChoice} </h2> {/* Displays user's choice */}
      <h2>Computer Chose : {computerCoice} </h2>{" "}
      {/* Displays computer's choice */}
      <h2 className="result">{result} </h2> {/* Displays game result */}
    </div>
  );
};

export default Result; // Exports the Result component
