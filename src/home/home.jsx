import MainHeroBg from '../img/bg-hero.jpg';
import { Navbar } from "../component/navbar";
import { Service } from '../component/service';
import { Menu } from '../component/menu';
import { Booking } from '../component/booking';
import ChefTeam from '../component/chefteam';
import Testimonial from '../component/Testimonial';
import Hero from '../component/hero';

export const Homepage = () => {
   
    return (
        <div className=''>
        <div className=" relative bg-cover bg-center bg-no-repeat text-white "
        style={{backgroundImage: `url(${MainHeroBg})`}}>
        <div className="absolute inset-0 bg-gray-900 opacity-90"></div>
         <Navbar  />
         <Hero/>
        </div>
        <Service />
        <Menu />
        <Booking />
        <ChefTeam/>
        <Testimonial/>
        </div>
    );
};
