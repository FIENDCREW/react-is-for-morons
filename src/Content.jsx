import React from 'react';
import "./App.css";
import logo from "./logo.svg";
import ItenList from "./ItenList";



const Content = ({items, handleCheck, handkeDelete}) => {
  return (
    <>
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
    </>
  );
};

export default Content;