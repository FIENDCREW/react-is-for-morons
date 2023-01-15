import React from 'react';
import "./App.css";
import logo from "./logo.svg";
import ItenList from "./ItenList";



const Content = ({items, setItems, handleCheck, handkeDelete}) => {
  return (
    <main className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {items.length ? (
        <ItenList 
          items={items}
          handleCheck={handleCheck}
          handkeDelete={handkeDelete}
        />
        ) : ( 
          <p style={{marginTop: '2rem'}}>Your list is empty</p>
        )
      }
    </main>
  );
};

export default Content;