import { useCart } from '@/context';
import { formatCurrency } from '@/utils';

const products = [
  { id: 1, name: 'Product 1', price: 29.99 },
  { id: 2, name: 'Product 2', price: 49.99 },
  { id: 3, name: 'Product 3', price: 19.99 }
];

const ProductList = () => {
  const { dispatch } = useCart();

  return (
    <ul className='w-full mt-6 space-y-4'>
      {products.map(product => (
        <li key={product.id} className='flex items-center justify-between rounded-lg px-4 py-3'>
          <div className='flex flex-col sm:flex-row sm:items-center sm:space-x-4'>
            <span className='text-sm font-medium'>{product.name}</span>
            <span className='text-sm text-gray-500'>{formatCurrency(product.price)}</span>
          </div>
          <button
            className='ml-4 rounded-md bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors'
            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
          >
            Add to Cart
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
