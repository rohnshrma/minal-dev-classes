import React from "react";

const Card = ({ superHeroName, realName }) => {
  return (
    <div className="card">
      <h3>{superHeroName}</h3>
      <p>{realName}</p>
    </div>
  );
};

export default Card;
