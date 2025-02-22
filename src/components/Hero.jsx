// Hero.jsx
import React from 'react';

const Hero = () => {
  const scrollToFeaturedRestaurants = () => {
    const section = document.getElementById('featured-restaurants');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Discover the Best Restaurants</h1>
        <p>Explore a world of flavors.</p>
        <button onClick={scrollToFeaturedRestaurants}>Explore Now</button>
        
      </div>
    </div>
  );
};

export default Hero;