import HeroBg from '../img/bg-hero.jpg';
import { FaUtensils } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
export const Service = () => {
    return(
        <div className="">
            <div 
    className="h-[390px] relative bg-cover bg-center bg-no-repeat text-white" 
    style={{ 
        backgroundImage: `linear-gradient(rgba(15, 23, 43, 0.9), rgba(15, 23, 43, 0.9)), url(${HeroBg})` 
    }}
>
          
            <div className=" py-5  mb-5">
                <div className="text-center my-12 pt-5 pb-4">
                    <h1 className="text-h1 text-center font-bold text-white mb-3 ">Services</h1>
                    <nav aria-label="breadcrumb">
    <ol className="flex justify-center space-x-4 text-sm text-gray-600 uppercase">
        <li className="breadcrumb-item">
            <a href="#" className="text-[#FEA116]">Home </a>/
        </li>
        <li className="breadcrumb-item">
            <a href="#" className="text-[#FEA116]">Pages </a>/
        </li>
        <li className="breadcrumb-item text-white " aria-current="page">
        Services
        </li>
    </ol>
</nav>
                </div>
            </div>
        </div>
    <div className=" py-[50px]">
    <div className="text-center ">
                    <h5 className="font-paci text-[#FEA116]  font-[400] text-left text-h4 mb-4 relative inline-block">
                    <span className="mr-1 absolute top-1/2 left-[-60px] block w-[45px] h-[2px] bg-[#FEA116] ml-2"></span>
                    Our Services
                    <span className=" absolute top-1/2 right-[-55px] block w-[45px] h-[2px] bg-[#FEA116] ml-2"></span>
                    </h5>
                    <h1 className="mb-5 text-query text-[#0F172B] font-nun font-bold leading-custom">Explore Our Services</h1>
                </div>
                
                <div className=" p-4 md:p-[50px]">
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-4">
                    <div className="shadow-light rounded pt-3 hover:bg-[#FEA116] group transition duration-400 ease-in-out">
                            <div className="p-4 py-5 px-5">
                            <FaUserTie size='50' className="text-[#FEA116] mb-4 group-hover:text-white" />
                                <h5 className="font-nun text-h5 font-bold text-[##0F172B] mb-2  group-hover:text-white">Master Chefs</h5>
                                <p className="block mb-4 mx-0 text-[#666565]  group-hover:text-white ">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                        <div className="shadow-light rounded pt-3 hover:bg-[#FEA116] group transition duration-400 ease-in-out">
                            <div className="p-4 py-5 px-5">
                            <FaUtensils size='50' className="text-[#FEA116] mb-4  group-hover:text-white" />
                                <h5 className="font-nun text-h5 font-bold text-[##0F172B] mb-2  group-hover:text-white">Quality Food</h5>
                                <p className="block mb-4 mx-0 text-[#666565]  group-hover:text-white">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>

                        <div className="shadow-light  rounded pt-3 hover:bg-[#FEA116] group transition duration-400 ease-in-out">
                            <div className="p-4 py-5 px-5">
                            <FaCartPlus size='50' className="text-[#FEA116] mb-4  group-hover:text-white" />
                                <h5 className="font-nun text-h5 font-bold text-[##0F172B] mb-2  group-hover:text-white">Online Order</h5>
                                <p className="block mb-4 mx-0 text-[#666565]  group-hover:text-white">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>

                        <div className="shadow-light  rounded pt-3 hover:bg-[#FEA116] group transition duration-400 ease-in-out">
                            <div className="p-4 py-5 px-5">
                            <FaHeadset size='50' className="text-[#FEA116] mb-4  group-hover:text-white"  />
                                <h5 className="font-nun text-h5 font-bold text-[##0F172B] mb-2  group-hover:text-white">24/7 Service</h5>
                                <p className="block mb-4 mx-0 text-[#666565]  group-hover:text-white">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-2 ">
                    <div className="shadow-light rounded pt-3 hover:bg-[#FEA116] group transition duration-400 ease-in-out">
                            <div className="p-4 py-5 px-5">
                            <FaUserTie size='50' className="text-[#FEA116] mb-4 group-hover:text-white" />
                                <h5 className="font-nun text-h5 font-bold text-[##0F172B] mb-2  group-hover:text-white">Master Chefs</h5>
                                <p className="block mb-4 mx-0 text-[#666565]  group-hover:text-white ">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                        <div className="shadow-light rounded pt-3 hover:bg-[#FEA116] group transition duration-200 ease-in-out">
                            <div className="p-4 py-5 px-5">
                            <FaUtensils size='50' className="text-[#FEA116] mb-4  group-hover:text-white" />
                                <h5 className="font-nun text-h5 font-bold text-[##0F172B] mb-2  group-hover:text-white">Quality Food</h5>
                                <p className="block mb-4 mx-0 text-[#666565]  group-hover:text-white">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>

                        <div className="shadow-light  rounded pt-3 hover:bg-[#FEA116] group transition duration-200 ease-in-out">
                            <div className="p-4 py-5 px-5">
                            <FaCartPlus size='50' className="text-[#FEA116] mb-4  group-hover:text-white" />
                                <h5 className="font-nun text-h5 font-bold text-[##0F172B] mb-2  group-hover:text-white">Online Order</h5>
                                <p className="block mb-4 mx-0 text-[#666565]  group-hover:text-white">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>

                        <div className="shadow-light  rounded pt-3 hover:bg-[#FEA116] group transition duration-200 ease-in-out">
                            <div className="p-4 py-5 px-5">
                            <FaHeadset size='50' className="text-[#FEA116] mb-4  group-hover:text-white"  />
                                <h5 className="font-nun text-h5 font-bold text-[##0F172B] mb-2  group-hover:text-white">24/7 Service</h5>
                                <p className="block mb-4 mx-0 text-[#666565]  group-hover:text-white">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
                </div>

    </div>
        </div>
    )
}