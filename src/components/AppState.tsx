import React, { createContext, useContext, useReducer } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface AppStateValue {
  cart: {
    items: CartItem[];
  };
}

interface Props {
  children: React.ReactNode;
}

interface Action<T> {
  type: T;
}

interface AddToCartAction extends Action<'ADD_TO_CART'> {
  payload: {
    item: Omit<CartItem, 'quantity'>;
  };
}

const defaultStateValue: AppStateValue = {
  cart: {
    items: [],
  },
};

export const AppStateContext = createContext(defaultStateValue);

export const AppDispatchContext = createContext<
  React.Dispatch<AddToCartAction> | undefined
>(undefined);

const reducer = (state: AppStateValue, action: AddToCartAction) => {
  if (action.type === 'ADD_TO_CART') {
    const pizzaToAdd = action.payload.item;
    const pizzaExists = state.cart.items.find(
      (item) => item.id === pizzaToAdd.id
    );
    return {
      ...state,
      cart: {
        ...state.cart,
        items: pizzaExists
          ? state.cart.items.map((item) => {
              if (item.id === pizzaToAdd.id) {
                return {
                  ...item,
                  quantity: item.quantity + 1,
                };
              }
              return item;
            })
          : [...state.cart.items, { ...pizzaToAdd, quantity: 1 }],
      },
    };
  }

  return state;
};

export const useStateDispatch = () => {
  const dispatch = useContext(AppDispatchContext);
  if (!dispatch) {
    throw new Error(
      'useStateDispatch must be used within a AppSetStateContext'
    );
  }
  return dispatch;
};

const AppStateProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultStateValue);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
