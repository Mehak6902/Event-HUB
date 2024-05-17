import Booking from "../bookings/Booking";
import NewsLetter from "../newsLetter/NewsLetter";
import Organizer from "./Organizer/Organizer";

import PopularEvents from "./PopularEvents";
import MagicBanner from "./magicBanner/MagicBanner";


const Home = () => {
  return (
    <div>
      <MagicBanner></MagicBanner>
     
      
      <Organizer />
      <PopularEvents />

      <Booking></Booking>
      
      <NewsLetter></NewsLetter>
      
    </div>
  );
};

export default Home;
