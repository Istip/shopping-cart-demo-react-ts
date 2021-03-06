import React, { Component } from 'react';
import CartIcon from '../assets/Cart.icon';
import { AppStateContext } from './AppState';
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
      <AppStateContext.Consumer>
        {(state) => {
          const totalPizzas = state.cart.items.reduce((acc, item) => {
            return acc + item.quantity;
          }, 0);

          return (
            <div className={styles.cartContainer}>
              <h1>Cart</h1>
              <button className={styles.button} onClick={this.handleToggle}>
                <CartIcon /> <span>{totalPizzas} pizza(s)</span>
              </button>

              {this.state.isOpen && (
                <div className={styles.cartDropDown}>
                  <ul>
                    {state.cart.items.map((item) => (
                      <li key={item.id}>
                        <div>{item.name}</div>
                        <div> &times; {item.quantity}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        }}
      </AppStateContext.Consumer>
    );
  }
}

export default Cart;
