import React from "react";
import Card from "./Card";

const Cards = (props) => {
  return (
    <div className="cards">
      {props.data.map((item) => (
        <Card
          key={item.id}
          superHeroName={item.superHeroName}
          realName={item.realName}
        />
      ))}
    </div>
  );
};

export default Cards;
