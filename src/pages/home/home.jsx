import { NavLink } from "react-router-dom";
import MainHeroBg from '../../img/bg-hero.jpg';
import HeroBg from '../../img/hero.png';
export const Homepage = () => {
   
    return (
        <>
        <div className="h-screen relative bg-cover bg-center bg-no repeat text-white "
        style={{backgroundImage: `url(${MainHeroBg})`}}>
        <div className="absolute inset-0 bg-gray-900 opacity-90"></div>
            <div className="w-full flex justify-around items-center py-4">
                <span className="text-lg text-yellow-500 z-10">NZDine</span>
                <nav className="ml-[200px]  z-10">
                    <ul className="flex gap-8">
                        <NavLink 
                            to="/" 
                            className={({isActive}) => 
                                `${isActive ? 'text-yellow-500' : 'text-gray-100'} hover:text-yellow-400 transition duration-500 ease-in-out`
                            }
                        >
                            HOME
                        </NavLink>
                        <NavLink 
                            to="/about" 
                            className={({isActive}) => 
                                `${isActive ? 'text-yellow-500' : 'text-gray-100'} hover:text-yellow-400 transition duration-500 ease-in-out`
                            }    
                        >
                            ABOUT
                        </NavLink>
                        <NavLink 
                            to="/service" 
                            className={({isActive}) => 
                                `${isActive ? 'text-yellow-500' : 'text-gray-100'} hover:text-yellow-400 transition duration-500 ease-in-out`
                            }
                        >
                            SERVICE
                        </NavLink>
                        <NavLink 
                            to="/menu" 
                            className={({isActive}) => 
                                `${isActive ? 'text-yellow-500' : 'text-gray-100'} hover:text-yellow-400 transition duration-500 ease-in-out`
                            }
                        >
                            MENU
                        </NavLink>
                        <NavLink 
                            to="/pages" 
                            className={({isActive}) => 
                                `${isActive ? 'text-yellow-500' : 'text-gray-100'} hover:text-yellow-400 transition duration-500 ease-in-out`
                            }
                        >
                            PAGES
                        </NavLink>
                        <NavLink 
                            to="/contact" 
                            className={({isActive}) => 
                                `${isActive ? 'text-yellow-500' : 'text-gray-100'} hover:text-yellow-400 transition duration-500 ease-in-out`
                            }
                        >
                            CONTACT
                        </NavLink>
                    </ul>
                </nav>
                <span className="py-2 px-8 bg-yellow-500 z-10 hover:bg-yellow-300 transition duration-300 ease-in-out cursor-pointer">BOOK A TABLE</span>
            </div>

            <div className="flex-1 flex items-center justify-between px-16">
                <div className="z-10" >
                    <h1 className="text-6xl font-bold mb-4 z-10">Enjoy Our <br /> Delicious Meals</h1>
                    <p className="text-lg font-bold mb-4 z-10">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. <br /> Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, <br /> sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p className="inline-block py-2 px-8 bg-yellow-500 z-10 hover:bg-yellow-300 transition duration-300 ease-in-out cursor-pointer">BOOK A TABLE</p>
                </div>
                <div className="flex-1 max-w-lg z-10 ">
                    <img src={HeroBg} alt="heroBackground" className="w-full h-auto animate-spin-slow"/>
                </div>
            </div>
        </div>
        </>
    );
};
