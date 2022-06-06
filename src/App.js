import React from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
<link
  href="https://fonts.googleapis.com/css?family=Rubik:300,regular,500,600,700,800,900,300italic,italic,500italic,600italic,700italic,800italic,900italic"
  rel="stylesheet"
/>;

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
