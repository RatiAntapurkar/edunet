import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <h3>{item.name}</h3>
          <p>{item.price}Rs.</p>
        </div>
      ))}
      <button>Purchase</button>
    </div>
  );
};

export default Cart;