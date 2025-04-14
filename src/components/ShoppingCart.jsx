import { useCart } from '@/context';
import { formatCurrency } from '@/utils';

const products = [
  { id: 1, name: 'Product 1', price: 29.99 },
  { id: 2, name: 'Product 2', price: 49.99 },
  { id: 3, name: 'Product 3', price: 19.99 }
];

const ShoppingCart = () => {
  const { cart, dispatch } = useCart();

  const addToCart = product => {
    const { items } = cart;
    const existingProduct = items.find(item => item.id === product.id);
    if (existingProduct) {
      dispatch({ type: 'ADD_TO_EXISTING_IN_CART', payload: product });
    } else {
      dispatch({
        type: 'ADD_NEW_TO_CART',
        payload: { ...product, quantity: 1 }
      });
    }
  };

  const removeFromCart = productId => {
    const { items } = cart;
    const existingProduct = items.find(item => item.id === productId);
    if (existingProduct.quantity === 1) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    } else {
      dispatch({ type: 'DECREMENT_QUANTITY', payload: productId });
    }
  };

  const emptyCart = () => dispatch({ type: 'EMPTY_CART' });

  return (
    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
      <div className='md:flex'>
        <div className='p-8'>
          <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
            {cart.user} this is your shopping cart
          </div>
          <ul className='mt-4'>
            {products.map(product => (
              <li key={product.id} className='flex justify-between items-center p-2'>
                <span>{product.name}</span>
                <span>{formatCurrency(product.price)}</span>
                <button
                  className='bg-blue-500 text-white px-3 py-1 rounded ml-4'
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
          <div className='mt-8'>
            <h2 className='text-lg font-bold'>Cart Items</h2>
            <ul className='mt-2'>
              {cart.items.map(item => (
                <li key={item.id} className='flex justify-between items-center p-2'>
                  <span>{item.name}</span>
                  <span>
                    {formatCurrency(item.price)} x {item.quantity}
                  </span>
                  <button
                    className='bg-red-500 text-white px-3 py-1 rounded ml-4'
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className='mt-4 text-right font-bold'>Total: {cart.total}</div>
            <div className='mt-4 text-right font-bold'>Item count: {cart.itemCount}</div>
            <button className='bg-red-500 text-white px-3 py-1 rounded ml-4' onClick={emptyCart}>
              Empty cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ShoppingCart };
