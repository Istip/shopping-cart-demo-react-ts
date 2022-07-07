import React from 'react';
import pizzas from '../data/pizzas.json';
import Pizza from './Pizza';
import styles from './App.module.css';
import Logo from '../assets/pizza.svg';

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Logo width={120} height={120} />
        <div className={styles.siteTitle}>Delicious Pizza</div>
      </div>
      <ul>
        {pizzas.map((pizza) => (
          <Pizza pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
};

export default App;
