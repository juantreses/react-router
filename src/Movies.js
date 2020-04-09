import React from "react";
import axios from "axios";

import MovieResults from "./components/movies/MovieResults";
import Form from "./components/movies/Form";
import Loading from "./components/movies/LoadingMovies";

export default class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: {
        loading: false,
        error: false,
        page: 1,
        searchValue: "",
        data: [],
      },
    };
  }

  searchMovies = (str) => {
    this.setState({
      ...this.state,
      movies: {
        ...this.state.movies,
        loading: true,
      },
    });
    axios
      .get("http://www.omdbapi.com/?apikey=ed80cc66&s=" + str)
      .then((response) => {
        this.setState({
          ...this.state,
          movies: {
            ...this.state.movies,
            loading: false,
            searchValue: str,
            data: response.data.Search,
          },
        });
      });
  };

  render() {
    return (
      <div>
        <h2>Not so awesome Movie Searcher</h2>
        <Form searchMovies={this.searchMovies} wijzigNaam={this.wijzigNaam} />
        {this.state.movies.loading && <Loading />}
        <MovieResults data={this.state.movies.data} />
      </div>
    );
  }
}
