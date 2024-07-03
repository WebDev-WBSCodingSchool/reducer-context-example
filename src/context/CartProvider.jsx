import { useReducer } from 'react';
import { CartContext } from '.';

const formatCurrency = amount =>
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(amount);

const initialState = {
  user: 'Anoj',
  items: [],
  total: new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(0),
  itemCount: 0
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_EXISTING_IN_CART': {
      const newItems = state.items.map(item =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return {
        ...state,
        items: newItems,
        itemCount: newItems.reduce((acc, item) => acc + item.quantity, 0),
        total: formatCurrency(newItems.reduce((acc, item) => acc + item.price * item.quantity, 0))
      };
    }
    case 'ADD_NEW_TO_CART': {
      const newItems = [...state.items, action.payload];
      const itemCount = newItems.reduce((acc, item) => acc + item.quantity, 0);
      const total = formatCurrency(
        newItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
      );
      return {
        ...state,
        items: newItems,
        itemCount,
        total
      };
    }
    case 'REMOVE_FROM_CART': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      return {
        ...state,
        items: newItems,
        itemCount: newItems.reduce((acc, item) => acc + item.quantity, 0),
        total: formatCurrency(newItems.reduce((acc, item) => acc + item.price * item.quantity, 0))
      };
    }
    case 'DECREMENT_QUANTITY': {
      const newItems = state.items.map(item =>
        item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
      );
      return {
        ...state,
        items: newItems,
        itemCount: newItems.reduce((acc, item) => acc + item.quantity, 0),
        total: formatCurrency(newItems.reduce((acc, item) => acc + item.price * item.quantity, 0))
      };
    }
    case 'EMPTY_CART':
      return {
        ...state,
        items: [],
        itemCount: 0,
        total: formatCurrency(0)
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  return <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>;
};

export default CartProvider;
