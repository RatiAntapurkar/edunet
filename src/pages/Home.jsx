import React from 'react';
import RestaurantCard from '../components/RestaurantCard';
import DishCard from '../components/DishCard';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import FeaturedRestaurants from '../components/FeaturedRestaurants';
import PopularDishes from '../components/PopularDishes';
import pasta from '../assets/pasta.jpg';
import pedha from '../assets/pedha.jpg';
import man from '../assets/man.jpg';
import coffee from '../assets/coffee.webp';
import pizza from '../assets/pizza.jpeg';
import dessert from '../assets/dessert.jpeg';
import paneer from '../assets/paneer.jpg';
import biryani from '../assets/biryani.jpeg';


const Home = () => {
  const restaurants = [
    { id: 1, name: 'Dominoz', cuisine: 'Italian', location: 'Dsouza Colony', image: pasta },
    
    { id: 2, name: 'Nandan', cuisine: 'Chinese', location: 'College Road', image: man },
    { id: 3, name: 'Madhur Sweets', cuisine: 'Indian', location: 'Gangapur Road', image: pedha },
    { id: 2, name: 'Starbucks', cuisine: 'Cafe', location: 'Roe Park', image: coffee },
  ];

  const dishes = [
    { id: 1, name: 'Pizza', description: 'Enjoy With Ur Frnds', price: 10, image: pizza },
    { id: 2, name: 'Mosse au chocolate', description: 'Dessert', price: 15, image: dessert },
    { id: 2, name: 'Biryani', description: 'Rice', price: 15, image: biryani },
    { id: 2, name: 'Paneer', description: 'High protein', price: 20, image: paneer },
  ];

 

  return (
    <div className="home">
      
      {}
      <Hero />

      {}<div id="featured-restaurants"></div>
      <FeaturedRestaurants restaurants={restaurants} />

      {}
      <PopularDishes dishes={dishes} />

     

      {}
      <Footer />
    </div>
  );
};

export default Home;