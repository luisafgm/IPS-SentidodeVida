import Home from '@/Components/Main/Home/Home';
import Services from './Services/Services';
import AboutUs from './AboutUs/AboutUs';
import Reviews from './Review/Reviews';

const Main = () => {
  return (
    <div className="m-auto max-w-[1250px] px-5 md:px-16">
      <Home />
      <AboutUs />
      <Services />
      <Reviews />
    </div>
  );
};

export default Main;
