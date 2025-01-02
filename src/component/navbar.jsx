import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaUtensils, FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        // toggleHeroShift(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const closeMenu = () => {
        setMenuOpen(false);
    };
    return (
        <div className={`w-full flex items-center fixed top-0 z-50  ${scrolled ? 'bg-gray-900' : ''}`}>
    <a href="/" className="flex items-center text-[#FEA116] md:pl-10 pl-4 py-2 pt-2 overflow-hidden">
        <FaUtensils size='40' />
        <span className="text-query font-bold ml-2">NZDine</span>
    </a>

    <div className="flex-grow"></div>

    <button className="lg:hidden border rounded p-2 text-gray-400 mr-4 overflow-hidden" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
    </button>

    <nav className={`absolute mr-8 lg:relative lg:flex lg:flex-wrap lg:items-center lg:w-auto bg-gray-800 lg:bg-transparent ${menuOpen ? "menu-open" : "hidden"} lg:block w-full lg:w-auto top-12 lg:top-0 lg:right-0 left-0 md:justify-end transition-all duration-500 ease-in-out mt-2`}>
        <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-y-6 lg:gap-x-5 p-4 mt-2 lg:p-0 md:ml-0">
    
                    <NavLink to="/"onClick={closeMenu} className={({ isActive }) => `${isActive ? 'text-[#FEA116]' : 'text-gray-100'} hover:text-[#FEA116] transition duration-500`}>
                        HOME
                    </NavLink>
                    <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => `${isActive ? 'text-[#FEA116]' : 'text-gray-100'} hover:text-[#FEA116] transition duration-500 `} >
                        ABOUT
                    </NavLink>
                    <NavLink to="/service" onClick={closeMenu} className={({ isActive }) => `${isActive ? 'text-[#FEA116]' : 'text-gray-100'} hover:text-[#FEA116] transition duration-500`}>
                        SERVICE
                    </NavLink>
                    <NavLink to="/menu" onClick={closeMenu} className={({ isActive }) => `${isActive ? 'text-[#FEA116]' : 'text-gray-100'} hover:text-[#FEA116] transition duration-500`}>
                        MENU
                    </NavLink>
                    <div className="relative">
                        <button onClick={toggleDropdown} className="text-gray-100 hover:text-[#FEA116] transition duration-500 flex items-center">
                            PAGES
                            <svg className={`ml-1 w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isOpen && (
                            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                <NavLink onClick={closeMenu} to="/Booking" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FEA116]">
                                    Booking
                                </NavLink>
                                <NavLink onClick={closeMenu} to="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FEA116]">
                                    Our Team
                                </NavLink>
                                <NavLink onClick={closeMenu} to="/testimonial" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FEA116]">
                                    Testimonial
                                </NavLink>
                            </div>
                        )}
                    </div>
                    <NavLink onClick={closeMenu} to="/contact" className={({ isActive }) => `${isActive ? 'text-[#FEA116]' : 'text-gray-100'} hover:text-[#FEA116] transition duration-500`}>
                        CONTACT
                    </NavLink>
                    <button  className="bg-[#FEA116] text-white py-2 uppercase rounded-sm px-6   transition duration-300 cursor-pointer inline-block md:inline-block">
                        BOOK A TABLE
                    </button>
                
        </ul>
    </nav>
</div>
        
    );
};
