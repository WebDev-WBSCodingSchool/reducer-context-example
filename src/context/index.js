import { createContext, useContext } from 'react';
import CartProvider from './CartProvider';

const CartContext = createContext();
const useCart = () => useContext(CartContext);

export { CartContext, CartProvider, useCart };
