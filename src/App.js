import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Title from "./components/Title";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Title />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
