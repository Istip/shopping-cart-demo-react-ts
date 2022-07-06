import React from 'react';
import pizzas from '../data/pizzas.json';
import Pizza from './Pizza';

const App = () => {
  return (
    <div>
      <ul>
        {pizzas.map((pizza) => (
          <Pizza pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
};

export default App;
