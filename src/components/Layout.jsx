import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <>
      <Header />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/star-wars">Star Wars</Link>
          </li>
        </ul>
      </nav>
      {props.children}
      <Footer />
    </>
  );
}
