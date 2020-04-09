import React from "react";
import axios from "axios";

import Form from "./components/starwars/Form";
import Loading from "./components/starwars/Loading";
import Result from "./components/starwars/Result";
import Results from "./components/starwars/AllResults";
import PageButtons from "./components/starwars/PageButtons";

class StarWars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swCharacters: {
        loading: false,
        error: false,
        data: [],
      },
      links: {},
    };
  }

  componentDidMount() {
    console.log("jos");
    this.searchSpecific("https://swapi.co/api/people/?search=");
  }

  searchSpecific = (link) => {
    this.setState({
      ...this.state,
      swCharacters: {
        ...this.state.swCharacters,
        loading: true,
      },
    });
    axios
      .get(link)
      .then((result) => {
        this.setState(
          {
            ...this.state,
            swCharacters: {
              ...this.swCharacters,
              data: [...result.data.results],
            },
            links: {
              nextLink: result.data.next,
              prevLink: result.data.previous,
            },
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <h2>Star Wars Galaxy Searcher</h2>
        <Form searchChar={this.searchSpecific} />
        {this.state.swCharacters.loading && <Loading />}
        <div className="grid">
          {Object.keys(this.state.swCharacters.data).length > 1 && (
            <Results
              data={this.state.swCharacters.data}
              showMore={this.searchSpecific}
            />
          )}
        </div>
        {Object.keys(this.state.swCharacters.data).length === 1 && (
          <Result
            data={this.state.swCharacters.data}
            back={this.searchSpecific}
          />
        )}
        <div className="flexbox">
          {Object.keys(this.state.swCharacters.data).length > 1 && (
            <PageButtons
              links={this.state.links}
              otherPage={this.searchSpecific}
            />
          )}
        </div>
      </div>
    );
  }
}

export default StarWars;
