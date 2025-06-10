import { CartHeader, CartItems, CartSummary, ProductList } from '@/components';

const ShoppingCart = () => (
  <div className='container mx-auto'>
    <div className='flex justify-center'>
      <div className='p-8'>
        <CartHeader />
        <ProductList />
        <div className='mt-10'>
          <h2 className='text-xl font-semibold'>Cart Items</h2>
          <CartItems />
          <CartSummary />
        </div>
      </div>
    </div>
  </div>
);

export default ShoppingCart;
