import { useState } from "react";
import { NavLink } from "react-router-dom"

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return(
        <div className="w-full flex justify-around items-center py-4 ">
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
                <div className="relative inline-block text-left">
            <NavLink
                onClick={toggleDropdown} 
                className={`flex items-center text-gray-100 hover:text-yellow-400 transition duration-500 ease-in-out`}
            >
                <span>PAGES</span>
                <svg 
                    className={`ml-1 w-4 h-4 transform transition-transform duration-200 `} 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </NavLink>
            {isOpen && (
                <div className="absolute left-1 z-80 mt-4 w-48 bg-white rounded-md shadow-lg">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                        <NavLink to="/Booking" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Booking
                        </NavLink>
                        <NavLink to="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Our Team
                        </NavLink>
                        <NavLink to="/testimonial" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Testimonial
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
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
    )
}