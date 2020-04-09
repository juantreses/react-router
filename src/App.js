import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";

import Movies from "./Movies";
import Movie from "./components/movies/Movie";
import StarWars from "./StarWars";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route
              path="/movie/:id/:title"
              render={(props) => <Movie {...props} />}
            />
            <Route path="/star-wars" component={StarWars} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
