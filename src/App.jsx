import { CartContextProvider } from '@/context';
import { ShoppingCart } from '@/components';

const App = () => (
  <CartContextProvider>
    <ShoppingCart />
  </CartContextProvider>
);

export default App;
