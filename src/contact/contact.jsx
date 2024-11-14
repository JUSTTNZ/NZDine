import { MessageSquare } from "iconsax-react";

import HeroBg from '../img/bg-hero.jpg';
export  const Contact = () => {
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
                    <h1 className="text-h1 font-bold text-white mb-3 ">Contact Us</h1>
                    <nav aria-label="breadcrumb">
    <ol className="flex justify-center space-x-4 text-sm text-gray-600 uppercase">
        <li className="breadcrumb-item">
            <a href="#" className="text-[#FEA116]">Home </a>/
        </li>
        <li className="breadcrumb-item">
            <a href="#" className="text-[#FEA116]">Pages </a>/
        </li>
        <li className="breadcrumb-item text-white" aria-current="page">
            Contact
        </li>
    </ol>
</nav>
                </div>
            </div>
        </div>

        <div className="container py-5">
        <div className="text-center ">
                    <h5 className="font-paci text-[#FEA116]  font-[400] text-left text-h4 mb-4 relative inline-block">
                    <span className="mr-1 absolute top-1/2 left-[-60px] block w-[45px] h-[2px] bg-[#FEA116] ml-2"></span>
                        Contact Us
                    <span className=" absolute top-1/2 right-[-55px] block w-[45px] h-[2px] bg-[#FEA116] ml-2"></span>
                    </h5>
                    <h1 className="mb-5 text-query text-[#0F172B] font-nun font-bold leading-custom">Contact For Any Query</h1>
                </div>
               <div className="container p-4 md:pl-[70px]">
               <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 mb-5">
                <div className="">
                                <h5 className="font-paci text-[#FEA116]  font-[400] text-left text-h4 mb-4 relative inline-block">Booking
                                <span className=" absolute top-1/2 right-[-55px] block w-[45px] h-[2px] bg-[#FEA116] ml-2"></span>
                                </h5>
                                <p className="flex"> <span className="mr-2">
                                <MessageSquare size="25" className="text-[#FEA116]"/> 
                                    </span>
                                    book@example.com
                                </p>
                            </div>
                            <div className="">
                                <h5 className="font-paci text-[#FEA116]  font-[400] text-left text-h4 mb-4 relative inline-block">General
                                <span className=" absolute top-1/2 right-[-55px] block w-[45px] h-[2px] bg-[#FEA116] ml-2"></span>
                                </h5>
                                <p className="flex">
                                <span className="mr-2">
                                <MessageSquare size="25" className="text-[#FEA116]"/> 
                                    </span>
                                    info@example.com</p>
                            </div>
                            <div className="">
                                <h5 className="font-paci text-[#FEA116]  font-[400] text-left text-h4 mb-4 relative inline-block">Technical
                                <span className=" absolute top-1/2 right-[-55px] block w-[45px] h-[2px] bg-[#FEA116] ml-2"></span>
                                </h5>
                                <p className="flex">
                                <span className="mr-2">
                                <MessageSquare size="25" className="text-[#FEA116]"/> 
                                    </span>
                                    tech@example.com</p>
                            </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
                    
                        <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
    <iframe 
        className="absolute top-0 left-0 w-full h-full rounded-lg border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
        frameBorder="0" 
        allowFullScreen 
        aria-hidden="false" 
        tabIndex="0">
    </iframe>
</div>
<div>
                <form>
                                <div className="conatiner ">
                                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                    <div className="mb-3">
                                            <input type="text" className="form-control border border-[#FEA116] w-full py-4 pl-4 pr-12 rounded" id="name" placeholder="Your Name" />
                                         
                                        </div>
                                        <div className="mb-3">
                                            <input type="email" className="form-control border border-[#FEA116] w-full py-4 pl-4 pr-12 rounded" id="email" placeholder="Your Email" />
                                         
                                        </div>
                                    </div>
                                   
                                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                                        <div className="mb-3">
                                            <input type="text" className="form-control border border-[#FEA116] w-full py-4 pl-4 pr-12 rounded" id="subject" placeholder="Subject" />
                                          
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                                        <div className="mb-3">
                                            <textarea className="form-control border border-[#FEA116] w-full py-4 pl-4 pr-12 rounded h-[150px]" placeholder="Leave a message here" id="message" ></textarea>

                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                                        <button className="btn bg-[#FEA116] text-h5 uppercase border-[#FEA116] font-nun  text-bold text-white py-4 px-4 w-full " type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                </div>
                    </div>
               



               </div>

        </div>
</div>
    )
}