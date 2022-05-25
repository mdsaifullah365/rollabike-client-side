import React from 'react';
import Banner from './Banner';
import AboutUs from './AboutUs';
import Products from './Products';
import Reviews from './Reviews';
import BusinessSummary from './BusinessSummary';

const Home = () => {
  return (
    <main>
      <Banner />
      <BusinessSummary />
      <AboutUs />
      <Products />
      <Reviews />
    </main>
  );
};

export default Home;
