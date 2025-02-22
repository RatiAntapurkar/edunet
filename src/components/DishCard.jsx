import React from 'react';

const DishCard = ({ dish }) => {
  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name} />
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <p>{dish.price}Rs.</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default DishCard;