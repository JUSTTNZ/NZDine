import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return(
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
    )
}