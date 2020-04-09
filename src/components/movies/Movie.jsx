import React from "react";
import axios from "axios";

import Loading from "./LoadingMovies";

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        data: {},
        loading: false,
        error: false,
      },
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      movie: {
        ...this.state.movie,
        loading: true,
      },
    });
    axios
      .get(
        "https://www.omdbapi.com/?apikey=2e3b4604&plot=full&i=" +
          this.props.match.params.id
      )
      .then((response) =>
        this.setState({
          ...this.state,
          movie: {
            ...this.state.movie,
            data: { ...response.data },
            loading: false,
          },
        })
      );
  }

  render() {
    return (
      <>
        {this.state.movie.loading && <Loading />}
        {Object.keys(this.state.movie.data).length > 1 && (
          <>
            <h1>{this.state.movie.data.Title}</h1>
            <img
              className="poster"
              src={this.state.movie.data.Poster}
              alt={`Poster for ${this.state.movie.data.Title}`}
            />
            <p>{this.state.movie.data.Plot}</p>
            <p>Awards: {this.state.movie.data.Awards}</p>
            <p>Rating: {this.state.movie.data.imdbRating}</p>
          </>
        )}
      </>
    );
  }
}
