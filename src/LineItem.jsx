import React from 'react';
import { FaTrashAlt} from 'react-icons/fa'

const LineItem = (item, handleCheck, handkeDelete) => {
  return (
    <li className='item' key={item.id}>
      <input 
        type="checkbox" 
        onChange={()=> handleCheck(item.id)}
        checked={item.checked} 
      />
      <label
        style={(item.checked) ? {textDecoration: "line-through"}
        : null}
        onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
      <FaTrashAlt 
        role="button" 
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
        onClick={() => handkeDelete(item.id)}
      />
    </li>
  );
};

export default LineItem;