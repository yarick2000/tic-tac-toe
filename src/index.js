import React from 'react';
import ReactDOM from 'react-dom/client';

 import Game from './components/game';

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Game />);
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
