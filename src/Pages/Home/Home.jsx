import Banner from './Banner';
import AboutUs from './AboutUs';
import Products from './Products';
import Reviews from './Reviews';
import BusinessSummary from './BusinessSummary';
import Support from './Support';

const Home = () => {
  return (
    <main>
      <Banner />
      <BusinessSummary />
      <AboutUs />
      <Products />
      <Reviews />
      <Support />
    </main>
  );
};

export default Home;
