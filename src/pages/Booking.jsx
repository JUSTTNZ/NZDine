import { useState } from "react";

import HeroBg from '../img/bg-hero.jpg';
import video from '../img/video.jpg'
import { FaPlay } from "react-icons/fa";
export const Booking = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [videoSrc, setVideoSrc] = useState('');

    const handleShowModal = (src) => {
        setVideoSrc(src);
        setIsOpen(true);
    };

    const handleHideModal = () => {
        setVideoSrc('');
        setIsOpen(false);
    };
    return(
        <div>
            <div 
    className="h-[390px] relative bg-cover bg-center bg-no-repeat text-white" 
    style={{ 
        backgroundImage: `linear-gradient(rgba(15, 23, 43, 0.9), rgba(15, 23, 43, 0.9)), url(${HeroBg})` 
    }}
>
         
            <div className="container py-5  mb-5">
                <div className="text-center my-12 pt-5 pb-4">
                    <h1 className="text-h1 font-bold text-white mb-3 ">Booking</h1>
                    <nav aria-label="breadcrumb">
    <ol className="flex justify-center space-x-4 text-sm text-gray-600 uppercase">
        <li className="breadcrumb-item">
            <a href="#" className="text-[#FEA116]">Home </a>/
        </li>
        <li className="breadcrumb-item">
            <a href="#" className="text-[#FEA116]">Pages </a>/
        </li>
        <li className="breadcrumb-item text-white" aria-current="page">
        Booking
        </li>
    </ol>
</nav>
                </div>
            </div>
        </div>

        <div className=" py-[50px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full" >
            <div className="relative w-full ">
            <img src={video} alt="Background Image" className="w-full h-full object-cover" />

            <div className="absolute z-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#FEA116] rounded-full pulse-animation"></div>

            
            <FaPlay
                onClick={() => handleShowModal("https://www.youtube.com/embed/DWRcNpR6Kdc")}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#0F172B] text-4xl cursor-pointer"
            />
        </div>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h5 className="text-lg font-semibold">YouTube Video</h5>
                            <button 
                                className="text-gray-500 hover:text-gray-700" 
                                onClick={handleHideModal}
                            >
                                &times;
                            </button>
                        </div>
                        <div className="p-4">
                            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                                <iframe 
                                    className="absolute top-0 left-0 w-full h-full" 
                                    src={videoSrc} 
                                    allowFullScreen 
                                    allow="autoplay"
                                    title="YouTube Video"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
               <div className="w-full bg-[#0F172B]">
    <div className="inline-flex flex-col items-start p-[50px] w-full">
        <h5 className="font-paci text-[#FEA116] font-[400] text-left text-h4 mb-4 relative inline-block">
            Reservation
            <span className="absolute top-1/2 right-[-55px] block w-[45px] h-[2px] bg-[#FEA116] ml-2"></span>
        </h5>
        <h1 className="mb-5 text-query text-white font-nun font-bold leading-custom">Book A Table Online</h1>
        <form className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="mb-3">
                    <input
                        type="text"
                        className="border border-[#FEA116] w-full py-4 pl-4 pr-12 rounded"
                        id="name"
                        placeholder="Your Name"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        className="border border-[#FEA116] w-full py-4 pl-4 pr-12 rounded"
                        id="email"
                        placeholder="Your Email"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="mb-3">
                    <input
                        type="text"
                        className="border border-[#FEA116] w-full py-4 pl-4 pr-12 rounded"
                        id="datetime"
                        placeholder="Date & Time"
                    />
                </div>
                <div className="mb-3">
                    <select
                        className="border border-[#FEA116] w-full py-4 pl-4 pr-12 rounded"
                        id="select1"
                    >
                        <option value="1">People 1</option>
                        <option value="2">People 2</option>
                        <option value="3">People 3</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1">
                <div className="mb-3">
                    <textarea
                        className="border border-[#FEA116] w-full h-[100px] py-2 pl-4 rounded"
                        placeholder="Special Request"
                        id="message"
                    ></textarea>
                </div>
            </div>
            <div className="grid grid-cols-1">
                <button className="bg-[#FEA116] text-white rounded py-3 w-full" type="submit">
                    Book Now
                </button>
            </div>
        </form>
    </div>
</div>
                    
                    
                
                    </div>
            </div>
        </div>
        
    )
}