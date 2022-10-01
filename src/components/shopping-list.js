import React from 'react';

const ShoppingList = ({ name }) => {
  return (
    <div className="shopping-list">
      <h1>Shopping List for {name}</h1>
      <ul>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Oculus</li>
      </ul>
    </div>
  );
};

export default ShoppingList;