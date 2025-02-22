import React from 'react';
import Cart from '../components/Cart';

const CartPage = () => {
  const cartItems = [
    { id: 1, name: 'Dish 1', price: 10 },
    { id: 2, name: 'Dish 2', price: 15 },
  ];

  return (
    <div className="cart-page">
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default CartPage;