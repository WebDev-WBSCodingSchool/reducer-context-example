import { useCart } from '@/context';
import { formatCurrency } from '@/utils';

const CartItems = () => {
  const { cart, dispatch } = useCart();

  return (
    <ul className='mt-4 space-y-4'>
      {cart.items.map(item => (
        <li key={item.id} className='flex items-center justify-between rounded-md px-4 py-3'>
          <div className='flex flex-col sm:flex-row sm:items-center sm:space-x-4'>
            <span className='text-sm font-medium'>{item.name}</span>
            <span className='text-sm text-gray-500'>
              {formatCurrency(item.price)} × {item.quantity}
            </span>
          </div>
          <button
            className='ml-4 rounded-md bg-red-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition-colors'
            onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CartItems;
