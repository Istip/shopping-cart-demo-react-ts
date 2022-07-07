import React from 'react';
import pizzas from '../data/pizzas.json';
import Pizza from './Pizza';
import styles from './App.module.css';
import Logo from '../assets/pizza.svg';
import Cart from './Cart';
import AppStateProvider from './AppState';
import Offer from './Offer';

const App = () => {
  const offer = pizzas.find((pizza) => pizza.offer);

  return (
    <AppStateProvider>
      <div className={styles.container}>
        <div className={styles.header}>
          <Logo width={120} height={120} />
          <div className={styles.siteTitle}>Delicious Pizza</div>

          <Cart />
        </div>

        {offer && <Offer pizza={offer} />}

        <ul className={styles.pizzaList}>
          {pizzas.map((pizza) => (
            <Pizza pizza={pizza} key={pizza.id} />
          ))}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
