import React from 'react';
import styles from './Pizza.module.css';
import { useSetState } from './AppState';

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface Props {
  pizza: Pizza;
}

const Pizza: React.FC<Props> = ({ pizza }) => {
  const setState = useSetState();
  const handleAddToCart = () => {
    setState((prevState) => {
      const pizzaExists = prevState.cart.items.find(
        (item) => item.id === pizza.id
      );

      return {
        ...prevState,
        cart: {
          ...prevState.cart,
          items: pizzaExists
            ? prevState.cart.items.map((item) => {
                if (item.id === pizza.id) {
                  return {
                    ...item,
                    quantity: item.quantity + 1,
                  };
                }
                return item;
              })
            : [
                ...prevState.cart.items,
                // The new item is added here below to the list
                {
                  id: pizza.id,
                  name: pizza.name,
                  price: pizza.price,
                  quantity: 1,
                },
              ],
        },
      };
    });
  };

  return (
    <li className={styles.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>${pizza.price}</p>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </li>
  );
};

export default Pizza;
