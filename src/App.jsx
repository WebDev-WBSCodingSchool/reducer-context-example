import { CartProvider } from '@/context';
import { ShoppingCart } from '@/components';

const App = () => (
  <CartProvider>
    <ShoppingCart />
  </CartProvider>
);

export default App;
