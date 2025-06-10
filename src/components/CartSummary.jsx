import { useCart } from '@/context';

const CartSummary = () => {
  const { cart, dispatch } = useCart();

  return (
    <div className='mt-4 text-right'>
      <div className='font-bold'>Total: {cart.total}</div>
      <div className='font-bold'>Item count: {cart.itemCount}</div>
      <button
        className='bg-red-500 text-white px-3 py-1 rounded ml-4 mt-2'
        onClick={() => dispatch({ type: 'EMPTY_CART' })}
      >
        Empty cart
      </button>
    </div>
  );
};

export default CartSummary;
