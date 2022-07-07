import React from 'react';
import CartIcon from '../assets/Cart.icon';
import styles from './Cart.module.css';

interface Props {}

interface State {
  isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div className={styles.cartContainer}>
        <h1>Cart</h1>
        <button
          className={styles.button}
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
        >
          <CartIcon /> 2 pizzas
        </button>

        {this.state.isOpen && (
          <div className={styles.cartDropDown}>
            <ul>
              <li>Napoletana</li>
              <li>Marinara</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
