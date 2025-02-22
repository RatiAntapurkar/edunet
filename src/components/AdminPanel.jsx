import React, { useState } from 'react';

const AdminPanel = () => {
  const [restaurant, setRestaurant] = useState({ name: '', cuisine: '', location: '', image: '' });
  const [dish, setDish] = useState({ name: '', description: '', price: '', image: '' });

  const handleRestaurantSubmit = (e) => {
    e.preventDefault();
    
  };

  const handleDishSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <form onSubmit={handleRestaurantSubmit}>
        <h3>Add Restaurant</h3>
        <input type="text" placeholder="Name" value={restaurant.name} onChange={(e) => setRestaurant({ ...restaurant, name: e.target.value })} required />
        <input type="text" placeholder="Cuisine" value={restaurant.cuisine} onChange={(e) => setRestaurant({ ...restaurant, cuisine: e.target.value })} required />
        <input type="text" placeholder="Location" value={restaurant.location} onChange={(e) => setRestaurant({ ...restaurant, location: e.target.value })} required />
        <input type="text" placeholder="Image URL" value={restaurant.image} onChange={(e) => setRestaurant({ ...restaurant, image: e.target.value })} required />
        <button type="submit">Add Restaurant</button>
      </form>

      <form onSubmit={handleDishSubmit}>
        <h3>Add Dish</h3>
        <input type="text" placeholder="Name" value={dish.name} onChange={(e) => setDish({ ...dish, name: e.target.value })} required />
        <input type="text" placeholder="Description" value={dish.description} onChange={(e) => setDish({ ...dish, description: e.target.value })} required />
        <input type="number" placeholder="Price" value={dish.price} onChange={(e) => setDish({ ...dish, price: e.target.value })} required />
        <input type="text" placeholder="Image URL" value={dish.image} onChange={(e) => setDish({ ...dish, image: e.target.value })} required />
        <button type="submit">Add Dish</button>
      </form>
    </div>
  );
};

export default AdminPanel;