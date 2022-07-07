import React, { Component } from 'react';
import CartIcon from '../assets/Cart.icon';
import styles from './Cart.module.css';

interface Props {}

interface State {
  isOpen: boolean;
}

class Cart extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  handleToggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <div className={styles.cartContainer}>
        <h1>Cart</h1>
        <button className={styles.button} onClick={this.handleToggle}>
          <CartIcon /> <span>2 pizzas</span>
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
