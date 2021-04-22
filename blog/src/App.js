import React, { Component } from "react";
import Posts from "./components/posts";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <section className="row">
          <div className="col-8 offset-2">
            <Posts />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
