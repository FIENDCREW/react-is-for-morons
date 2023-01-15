import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag Cocoa Covered Amonds Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "Items 2",
    },
    {
      id: 3,
      checked: false,
      item: "Items 3",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("choppinglist", JSON.stringify(listItems));
  };

  const handkeDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("choppinglist", JSON.stringify(listItems));
  };

  return (
    <div className="App">
      <Header title="Groceries List" />
      <Content
        items={items}
        setItems={setItems}
        handleCheck={handleCheck}
        handkeDelete={handkeDelete}
      />
      <Footer />
    </div>
  );
};

export default App;
