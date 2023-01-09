import React from 'react';
import "./App.css";
import logo from "./logo.svg";

const Content = () => {
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  const heandleClick = () => {
    console.log("You clicked it")
  };
  const heandleClick2 = (name) => {
    console.log(`${name} was clicked`)
  };
  const heandleClick3 = (e) => {
    console.log(e.target.innerText)
  };
  return (
    <main className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p onDoubleClick={heandleClick}>Hello {handleNameChange()}!</p>
      <button onClick={heandleClick}> Click It </button>
      <button onClick={() => {heandleClick2(handleNameChange())}}> Click It </button>
      <button onClick={(e) => heandleClick3(e)}> Click It </button>
    </main>
  );
};

export default Content;