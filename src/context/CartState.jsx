import { useReducer } from 'react';
import { formatCurrency } from '@/utils';
import { CartContext } from '@/context';

const initialState = {
  user: 'Anoj',
  items: [],
  total: formatCurrency(0),
  itemCount: 0
};

const cartReducer = (state, action) => {
  const recalculateCart = items => {
    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const total = formatCurrency(items.reduce((acc, item) => acc + item.price * item.quantity, 0));
    return { ...state, items, itemCount, total };
  };

  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingProduct = state.items.find(item => item.id === action.payload.id);

      let newItems;
      if (existingProduct) {
        newItems = state.items.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      return recalculateCart(newItems);
    }

    case 'REMOVE_FROM_CART': {
      const existingProduct = state.items.find(item => item.id === action.payload);

      let newItems;
      if (existingProduct.quantity === 1) {
        newItems = state.items.filter(item => item.id !== action.payload);
      } else {
        newItems = state.items.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        );
      }

      return recalculateCart(newItems);
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

const CartState = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return <CartContext value={{ cart, dispatch }}>{children}</CartContext>;
};

export default CartState;
