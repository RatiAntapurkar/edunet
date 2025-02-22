import React from 'react';
import DishCard from './DishCard';

const PopularDishes = ({ dishes }) => {
  return (
    <div className="popular-dishes">
      <h2>Popular Dishes</h2>
      <div className="dish-grid">
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default PopularDishes;