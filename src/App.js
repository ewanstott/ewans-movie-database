// 28d423797d2fe9e1bad731da8419f182

import React, { Component } from "react";
import Interface from "./components/Interface";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <Interface />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }
}

export default App;
