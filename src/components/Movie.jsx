import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280/";

const voteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "crimson";
  }
};

function Movie({ data: { overview, title, poster_path, vote_average } }) {
  return (
    <div className="movie">
      {poster_path ? <img src={`${IMG_API}${poster_path}`} alt={title} /> : "No Image"}
      <div className="movie-info">
        <h3>{title}</h3>
        <span
          className={`tag ${voteClass(vote_average)}`}
        >
          {vote_average}
        </span>
      </div>
      <div className="movie_overview">
        <h2>Overview :</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Movie;
