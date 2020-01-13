import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <header className="app__header"></header>
        <main className="app__main"></main>
        <h2>Behaa Jumaa</h2> 
      </div>
    );
  }
}

export default App;
