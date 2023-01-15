import React from "react";
import LineItem from "./LineItem";

const ItenList = ({items, handleCheck, handkeDelete}) => {
  return (
      <ul>
          {items.map((item) => (
            <LineItem 
              key={item.id}
              item={item}
              handleCheck={handleCheck}
              handkeDelete={handkeDelete}
            />
          ))}
      </ul>
  );
};

export default ItenList;