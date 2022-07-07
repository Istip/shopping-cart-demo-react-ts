import React from 'react';
import { AddToCartProps, Pizza } from '../data/types';
import { withAddToCart } from './AddToCart';
import styles from './Offer.module.css';

interface Props extends AddToCartProps {
  pizza: Pizza;
}

const Offer: React.FC<Props> = ({ pizza, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({ id: pizza.id, name: pizza.name, price: pizza.price });
  };

  return (
    <div className={styles.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>${pizza.price}</p>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default withAddToCart(Offer);
