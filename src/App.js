import React from 'react';
import logo from './logo.svg';
import './App.css';

const value = 45;
const array = [1, 2, 3, 4, 5];
function ff() {
  return 'text from function';
}

function App() {
  return (
    <>
      <h1>
        Hi <em>JSX!</em> value = {value}
      </h1>
      <p>{Math.random() > 0.5 ? 'yes' : 'no'} {ff()}</p>
      <ul>
        {array.map((num) => (
          <li>{num}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
