import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Homepage = () => {
    const [isActive, setIsActive] = useState('home');
    

    return (
        <>
            <div className="w-full flex justify-around items-center py-4">
                <span className="text-lg">NZDine</span>
                <nav className="ml-[200px]">
                    <ul className="flex gap-8">
                        <NavLink 
                            to="/" 
                            className={isActive === 'home' ? 'text-yellow-500' : 'text-gray-100'}
                            onClick={() => setIsActive('home')}
                        >
                            HOME
                        </NavLink>
                        <NavLink 
                            to="/about" 
                            className={isActive === 'about' ? 'text-yellow-500' : 'text-gray-100'}
                            onClick={() => setIsActive('about')}
                        >
                            ABOUT
                        </NavLink>
                        <NavLink 
                            to="/service" 
                            className={isActive === 'service' ? 'text-yellow-500' : 'text-gray-100'}
                            onClick={() => setIsActive('service')}
                        >
                            SERVICE
                        </NavLink>
                        <NavLink 
                            to="/menu" 
                            className={isActive === 'menu' ? 'text-yellow-500' : 'text-gray-100'}
                            onClick={() => setIsActive('menu')}
                        >
                            MENU
                        </NavLink>
                        <NavLink 
                            to="/pages" 
                            className={isActive === 'pages' ? 'text-yellow-500' : 'text-gray-100'}
                            onClick={() => setIsActive('pages')}
                        >
                            PAGES
                        </NavLink>
                        <NavLink 
                            to="/contact" 
                            className={isActive === 'contact' ? 'text-yellow-500' : 'text-gray-100'}
                            onClick={() => setIsActive('contact')}
                        >
                            CONTACT
                        </NavLink>
                    </ul>
                </nav>
                <span className="py-4 px-8 bg-yellow-400">BOOK A TABLE</span>
            </div>
        </>
    );
};
