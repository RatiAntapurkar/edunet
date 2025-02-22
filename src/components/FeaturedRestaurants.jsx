// FeaturedRestaurants.jsx
import React from 'react';
import RestaurantCard from './RestaurantCard';

const FeaturedRestaurants = ({ restaurants }) => {
  return (
    <div className="featured-restaurants">
      <h2>Featured Restaurants</h2>
      <div className="restaurant-grid">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedRestaurants;