import { createContext, use } from 'react';

export const CartContext = createContext();

export const useCart = () => {
  const context = use(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartState');
  }
  return context;
};
