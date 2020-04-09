import React from "react";

export default function Results(props) {
  return props.data.map((char) => {
    return (
      <>
        <h2>{char.name}</h2>
        <p>Hair color: {char.hair_color}</p>
        <p>Skin color: {char.skin_color}</p>
        <p>Eye color: {char.eye_color}</p>
        <p>Birth year: {char.birth_year}</p>
        <p>Gender: {char.gender}</p>

        <button
          onClick={() => props.back("https://swapi.co/api/people/?search=")}
        >
          Back
        </button>
      </>
    );
  });
}
