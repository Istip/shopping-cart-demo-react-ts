import React from 'react';
import styles from './Pizza.module.css';
import { AddToCartProps, Pizza as PizzaItem } from '../data/types';
import { withAddToCart } from './AddToCart';

interface Props extends AddToCartProps {
  pizza: PizzaItem;
}

const Pizza: React.FC<Props> = ({ pizza, addToCart }) => {
  const handleAddToCart = () =>
    addToCart({ id: pizza.id, name: pizza.name, price: pizza.price });

  return (
    <li className={styles.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>$ {pizza.price}</p>

      <button className={styles.btnPrimary} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </li>
  );
};

export default withAddToCart(Pizza);
