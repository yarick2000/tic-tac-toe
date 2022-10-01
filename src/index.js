import React from 'react';
import ReactDOM from 'react-dom/client';

// import Game from './components/game';
import ShoppingList from './components/shopping-list';

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Game />);
root.render(<ShoppingList name="Fast Shop"  />);
