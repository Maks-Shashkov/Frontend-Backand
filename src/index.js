import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [
    { id: "todo-0", name: "Поесть", completed: true },
    { id: "todo-1", name: "Поспать", completed: false },
    { id: "todo-2", name: "Повторить", completed: false }
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App tasks={DATA}/>
  </React.StrictMode>
);


