import React from 'react';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <img src={restaurant.image} alt={restaurant.name} />
      <h3>{restaurant.name}</h3>
      <p>{restaurant.cuisine}</p>
      <p>{restaurant.location}</p>
    </div>
  );
};

export default RestaurantCard;