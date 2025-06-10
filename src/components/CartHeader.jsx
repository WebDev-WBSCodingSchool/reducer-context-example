import { useCart } from '@/context';

const CartHeader = () => {
  const { cart } = useCart();

  return (
    <div className='text-sm font-semibold uppercase tracking-wider text-indigo-600'>
      {cart.user}, this is your shopping cart
    </div>
  );
};

export default CartHeader;
