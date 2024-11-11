import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import { FaUtensils } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    useEffect (() => {
        const handleScroll = () => {
            if(window.scrollY > 0) {
                setScrolled(true)
            }
            else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    },[]);
    return(
        <div className={` w-full flex justify-around items-center py-4 fixed top-0 z-50 ${scrolled ? 'bg-gray-900' : ''}`}>
            <div className="relative">
                <button 
                    className=" text-3xl text-gray-400 border rounded md:hidden p-2 "
                    onClick={toggleMenu}>
                    {menuOpen ? <FaTimes/> : <FaBars/>}
                </button>
            </div>
           <a href="/" className="flex flex-cols text-[#FEA116]">
           <span><FaUtensils size='50' /></span>
           <span className=" inline text-[2.5rem] text-center font-bold ml-2 z-10">NZDine</span>
           </a>
        <nav className={`absolute right-2 left-0  ml-[200px]  z-10`}>
            <ul className="flex gap-8">
                <NavLink 
                    to="/" 
                    className={({isActive}) => 
                        `${isActive ? 'text-[#FEA116]' : 'text-gray-100'} hover:text-[#FEA116] transition duration-500 ease-in-out`
                    }
                >
                    HOME
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={({isActive}) => 
                        `${isActive ? 'text-[#FEA116]' : 'text-gray-100'} hover:text-[#FEA116] transition duration-500 ease-in-out`
                    }    
                >
                    ABOUT
                </NavLink>
                <NavLink 
                    to="/service" 
                    className={({isActive}) => 
                        `${isActive ? 'text-[#FEA116]' : 'text-gray-100'} hover:text-[#FEA116] transition duration-500 ease-in-out`
                    }
                >
                    SERVICE
                </NavLink>
                <NavLink 
                    to="/menu" 
                    className={({isActive}) => 
                        `${isActive ? 'text-[#FEA116]' : 'text-gray-100'} hover:text-[#FEA116] transition duration-500 ease-in-out`
                    }
                >
                    MENU
                </NavLink>
                <div className="relative inline-block text-left">
            <NavLink
                onClick={toggleDropdown} 
                className={`flex items-center text-gray-100 hover:text-[#FEA116] transition duration-500 ease-in-out`}
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
                        <NavLink 
                            to="/Booking" 
                            className={({isActive}) => 
                            `${isActive ? 'bg-[#FEA116]' : 'bg-white'}  block px-4 py-2 text-sm text-gray-700  `}>
                                Booking
                        </NavLink>
                        <NavLink 
                            to="/team" 
                            className={({isActive}) => 
                                `${isActive ? 'bg-[#FEA116]' : 'bg-white'}  block px-4 py-2 text-sm text-gray-700  `}>
                                Our Team
                        </NavLink>
                        <NavLink 
                            to="/testimonial" 
                            className={({isActive}) => 
                                `${isActive ? 'bg-[#FEA116]' : 'bg-white'}  block px-4 py-2 text-sm text-gray-700  `}>
                                Testimonial
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
                <NavLink 
                    to="/contact" 
                    className={({isActive}) => 
                        `${isActive ? 'text-[#FEA116]' : 'text-gray-100'} hover:text-[#FEA116] transition duration-500 ease-in-out`
                    }
                >
                    CONTACT
                </NavLink>
            </ul>
        </nav>
        <span className=" inline-block text-white py-2 px-8 bg-[#FEA116] z-10 hover:bg-yellow-300 transition duration-300 ease-in-out cursor-pointer">BOOK A TABLE</span>
    </div>
    )
}