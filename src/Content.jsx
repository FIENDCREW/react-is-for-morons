import React, { useState } from 'react';
import "./App.css";
import logo from "./logo.svg";
import { FaTrashAlt} from 'react-icons/fa'

const Content = () => {
  const [ items, setItems ] = useState([
    {
      id:1,
      checked: false,
      item: 'One half pound bag Cocoa Covered Amonds Unsalted'
    },
    {
      id:2,
      checked: false,
      item: 'Items 2'
    },
    {
      id:3,
      checked: false,
      item: 'Items 3'
    },
  ]);
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id? {...item,checked:!item.checked} : item)
    setItems(listItems);
    localStorage.setItem('choppinglist', JSON.stringify(listItems));
  };
  return (
    <main className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <ul>
        {items.map((item) => (
          <li className='item' key={item.id}>
            <input 
              type="checkbox" 
              onChange={()=> handleCheck(item.id)}
              checked={item.checked} />
            <label
              style={(item.checked) ? {textDecoration: "line-through"} : null}
              onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
            <FaTrashAlt 
              role="button" 
              tabIndex="0"
            />
          </li>
        ))}

      </ul>
    </main>
  );
};

export default Content;