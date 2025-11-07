import React from "react";
import StarshipCard from "../StarshipCard/StarshipCard";
import StarshipSearch from "../StarshipSearch/StarshipSearch";

const StarshipList = ({ starships }) => {
  return (
    <>
      <div>
        <ul>
          {starships.map((starship) => (
            <li>{starship.name}</li>
          ))}
        </ul>
        <h2>StarshipList</h2>
      </div>
    </>
  );
};

export default StarshipList;
