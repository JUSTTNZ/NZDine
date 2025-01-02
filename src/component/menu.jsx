import { FaCoffee } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import menu1 from '../img/menu-1.jpg'
import menu2 from '../img/menu-2.jpg'
import menu3 from '../img/menu-3.jpg'
import menu4 from '../img/menu-4.jpg'
import menu5 from '../img/menu-5.jpg'
import menu6 from '../img/menu-6.jpg'
import menu7 from '../img/menu-7.jpg'
import menu8 from '../img/menu-8.jpg'
import { useState } from "react";
export const Menu = () => {
    const [activeTab , setActiveTab] = useState('tab-1')
    const handleMenu = (tab) => {
        setActiveTab(tab)
    }
    return(
        <div className="container py-[80px]">
        <div className="text-center ">
                    <h5 className="font-paci text-[#FEA116]  font-[400] text-left text-h4 mb-4 relative inline-block">
                    <span className="mr-1 absolute top-1/2 left-[-60px] block w-[45px] h-[2px] bg-[#FEA116] ml-2"></span>
                    Food Menu
                    <span className=" absolute top-1/2 right-[-55px] block w-[45px] h-[2px] bg-[#FEA116] ml-2"></span>
                    </h5>
                    <h1 className="mb-5 text-query text-[#0F172B] font-nun font-bold leading-custom">Most Popular Items</h1>
                </div>
                
                <div className="text-center pl-10 md:pl-0">
    <ul className="nav nav-pills flex flex-wrap justify-center border-b mb-5">
        <li className="nav-item w-1/2 md:w-auto">
            <a className={`flex items-center text-start mx-3 ms-0 pb-3 active 
                ${activeTab === 'tab-1' ? 'border-b-2 border-[#FEA116]' : ''}`}
                onClick={() => handleMenu('tab-1')}
                data-bs-toggle="pill" href="#tab-1">
                <FaCoffee size='40' className="text-[#FEA116]" />
                <div className="ps-3">
                    <small className="text-[#666565] text-[.875em]">Popular</small>
                    <h6 className="mt-n1 mb-0 text-[#0F172B] font-bold font-nun">Breakfast</h6>
                </div>
            </a>
        </li>
        <li className="nav-item w-1/2 md:w-auto">
            <a className={`flex items-center text-start mx-3 ms-0 pb-3 active 
                ${activeTab === 'tab-2' ? 'border-b-2 border-[#FEA116]' : ''}`}
                onClick={() => handleMenu('tab-2')}
                data-bs-toggle="pill" href="#tab-2">
                <FaHamburger size='40' className="text-[#FEA116]" />
                <div className="ps-3">
                    <small className="text-[#666565] text-[.875em]">Special</small>
                    <h6 className="mt-n1 mb-0 text-[#0F172B] font-bold font-nun">Lunch</h6>
                </div>
            </a>
        </li>
        <li className="nav-item w-full md:w-auto">
            <a className={`flex items-center text-start mx-3 ms-0 pb-3 active 
                ${activeTab === 'tab-3' ? 'border-b-2 border-[#FEA116]' : ''}`}
                onClick={() => handleMenu('tab-3')}
                data-bs-toggle="pill" href="#tab-3">
                <FaUtensils size='40' className="text-[#FEA116]" />
                <div className="ps-3">
                    <small className="text-[#666565] text-[.875em]">Lovely</small>
                    <h6 className="mt-n1 mb-0 text-[#0F172B] font-bold font-nun">Dinner</h6>
                </div>
            </a>
        </li>
    </ul>
</div>



                    <div className="container p-4 md:p-[70px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                        <div className="flex items-center">
                                        <img className="flex-shrink-0 img-fluid rounded w-[80px]" src={menu1} alt="" />
                                        <div className="w-full flex flex-col text-left ps-4">
                                            <h5 className="flex justify-between border-b pb-2">
                                                <span className="text-h5 font-bold text-[#0F172B]">Chicken Burger</span>
                                                <span className="text-[#FEA116] font-nun text-h5 font-bold ">$115</span>
                                            </h5>
                                            <small className="italic  text-[.875em]">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="flex-shrink-0 img-fluid rounded w-[80px]" src={menu2} alt="" />
                                        <div className="w-full flex flex-col text-left ps-4">
                                            <h5 className="flex justify-between border-b pb-2">
                                                <span className="text-h5 font-bold text-[#0F172B]">Chicken Burger</span>
                                                <span className="text-[#FEA116] font-nun text-h5 font-bold ">$115</span>
                                            </h5>
                                            <small className="italic  text-[.875em]">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="flex-shrink-0 img-fluid rounded w-[80px]" src={menu3} alt="" />
                                        <div className="w-full flex flex-col text-left ps-4">
                                            <h5 className="flex justify-between border-b pb-2">
                                                <span className="text-h5 font-bold text-[#0F172B]">Chicken Burger</span>
                                                <span className="text-[#FEA116] font-nun text-h5 font-bold ">$115</span>
                                            </h5>
                                            <small className="italic  text-[.875em]">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="flex-shrink-0 img-fluid rounded w-[80px]" src={menu4} alt="" />
                                        <div className="w-full flex flex-col text-left ps-4">
                                            <h5 className="flex justify-between border-b pb-2">
                                                <span className="text-h5 font-bold text-[#0F172B]">Chicken Burger</span>
                                                <span className="text-[#FEA116] font-nun text-h5 font-bold ">$115</span>
                                            </h5>
                                            <small className="italic  text-[.875em]">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="flex-shrink-0 img-fluid rounded w-[80px]" src={menu5} alt="" />
                                        <div className="w-full flex flex-col text-left ps-4">
                                            <h5 className="flex justify-between border-b pb-2">
                                                <span className="text-h5 font-bold text-[#0F172B]">Chicken Burger</span>
                                                <span className="text-[#FEA116] font-nun text-h5 font-bold ">$115</span>
                                            </h5>
                                            <small className="italic  text-[.875em]">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="flex-shrink-0 img-fluid rounded w-[80px]" src={menu6} alt="" />
                                        <div className="w-full flex flex-col text-left ps-4">
                                            <h5 className="flex justify-between border-b pb-2">
                                                <span className="text-h5 font-bold text-[#0F172B]">Chicken Burger</span>
                                                <span className="text-[#FEA116] font-nun text-h5 font-bold ">$115</span>
                                            </h5>
                                            <small className="italic  text-[.875em]">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="flex-shrink-0 img-fluid rounded w-[80px]" src={menu7} alt="" />
                                        <div className="w-full flex flex-col text-left ps-4">
                                            <h5 className="flex justify-between border-b pb-2">
                                                <span className="text-h5 font-bold text-[#0F172B]">Chicken Burger</span>
                                                <span className="text-[#FEA116] font-nun text-h5 font-bold ">$115</span>
                                            </h5>
                                            <small className="italic  text-[.875em]">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="flex-shrink-0 img-fluid rounded w-[80px]" src={menu8} alt="" />
                                        <div className="w-full flex flex-col text-left ps-4">
                                            <h5 className="flex justify-between border-b pb-2">
                                                <span className="text-h5 font-bold text-[#0F172B]">Chicken Burger</span>
                                                <span className="text-[#FEA116] font-nun text-h5 font-bold ">$115</span>
                                            </h5>
                                            <small className="italic  text-[.875em]">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                    
                        </div>
                    </div>

        </div>
    )
}