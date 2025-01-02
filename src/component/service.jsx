import { FaUtensils } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
export const Service = () => {
    return(
        <div className=" p-4 md:p-[50px]">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
        <div className="shadow-light rounded pt-3 hover:bg-[#FEA116] group transition duration-200 ease-in-out">
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
    )
}