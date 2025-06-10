import { CartState } from '@/context';
import { ShoppingCart } from '@/components';

const App = () => (
  <CartState>
    <ShoppingCart />
  </CartState>
);

export default App;
