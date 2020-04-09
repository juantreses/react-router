import React from "react";
import { Link } from "react-router-dom";

import { slugify } from "../../helpers";

export default function MovieResults(props) {
  if (!props.data) return null;
  return (
    <ul>
      {props.data.map((movie) => (
        <li key={movie.imdbID}>
          {movie.Title} ({movie.Year}) -{" "}
          <Link to={`/movie/${movie.imdbID}/${slugify(movie.Title)}`}>
            More info
          </Link>
        </li>
      ))}
    </ul>
  );
}
