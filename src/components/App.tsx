import React from 'react';
import pizzas from '../data/pizzas.json';
import Pizza from './Pizza';
import style from './App.module.css';

const App = () => {
  return (
    <div className={style.container}>
      <ul>
        {pizzas.map((pizza) => (
          <Pizza pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
};

export default App;
