import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: {
        value: "",
        error: false,
      },
    };
  }

  changeHandler = (e) => {
    this.setState({
      searchField: {
        value: e.target.value,
        error: false,
      },
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.searchMovies(this.state.searchField.value);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          id="searchBar"
          value={this.state.searchField.value}
          onChange={this.changeHandler}
        />
        <input type="submit" id="searchButton" value="search" />
      </form>
    );
  }
}
