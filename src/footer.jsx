import { ArrowRight2, Call, Location, MessageSquare } from "iconsax-react"
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
export const Footer = () => {
    return(
        <div className=" mx-auto  mt-5 pt-5 bg-[#0F172B] text-[#F1F8FF] ">
          <div className=" p-4 md:p-[50px] ">
          <div className=" py-[50px]">
           <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
           <div className="">
           <h4 className="font-paci text-[#FEA116]  font-[400] text-left text-h4 mb-4 relative inline-block">Company
           <span className=" absolute top-1/2 right-[-55px] block w-[45px] h-[2px] bg-[#FEA116] ml-2"></span>
           </h4>
         <div className="mb-2">
         <a className="btn btn-link capitalize font-[15px] transition duration-150 ease-in-out flex " href="">
        <span className=""> 
            <ArrowRight2 size="25" className=" text-[#FFF] font-extrabold " />
        </span>
        About Us
    </a>
         </div>
    
                    <div className="mb-2">
                    <a className="btn btn-link capitalize font-normal font-[15px] flex" href="">
                    <span className=""> 
            <ArrowRight2 size="25" className=" text-[#FFF] font-extrabold " />
        </span>
                        Contact Us</a>
                    </div>
                   <div className="mb-2 ease-in duration-300">
                   <a className=" btn-link capitalize font-normal font-[15px] ease-in duration-300 flex" href="">
                   <span className=""> 
            <ArrowRight2 size="25" className=" text-[#FFF] font-extrabold " />
        </span>
                    Reservation</a>
                   </div>
                      <div className="mb-2">
                      <a className="btn btn-link capitalize font-normal font-[15px] transition duration-300 ease delay-0 transition-all flex" href="">
                      <span className=""> 
            <ArrowRight2 size="25" className=" text-[#FFF] font-extrabold " />
        </span>
                        Privacy Policy</a>
                      </div>
                      <div className="mb-2">
                      <a className="btn btn-link capitalize font-normal font-[15px] transition duration-300 ease delay-0 transition-all flex " href="">
                      <span className=""> 
            <ArrowRight2 size="25" className=" text-[#FFF] font-extrabold " />
        </span>
                        Terms & Condition</a>
                      </div>
           </div>

           <div>
           <h4 className="font-paci text-[#FEA116]  font-[400] text-left text-h4 mb-4 relative inline-block">Contact
           <span className=" absolute top-1/2 right-[-55px] block w-[45px] h-[2px] bg-[#FEA116] ml-2"></span>
           </h4>
                        <p className="mb-2 flex">
                        <span className="mr-3">
                       <Location size="25"/>
                       </span>
                            123 Street, New York, USA</p>
                        <p className="mb-2 flex">
                            <span className="mr-3">
                            <Call size="25" className="text-[#fff]  " />
                            </span>
                            +012 345 67890</p>
                        <p className="mb-2 flex">
                       <span className="mr-3">
                       <MessageSquare size="25"/>
                       </span>
                            info@example.com</p>
                        <div className="d-flex pt-2 flex gap-3">
                            <a className="btn btn-outline-light btn-social " href=""><TiSocialTwitterCircular size='30' /></a>
                            <a className="btn btn-outline-light btn-social" href=""><RiFacebookCircleLine size='30' /></a>
                            <a className="btn btn-outline-light btn-social" href=""><AiOutlineYoutube size='30'  />
                            </a>
                            <a className="btn btn-outline-light btn-social" href="">< FaLinkedinIn size='30' /></a>
                        </div>
           </div>
           <div>
           <h4 className="font-paci text-[#FEA116] font-[400] text-left text-h4 mb-4 relative inline-block">Opening
           <span className=" absolute top-1/2 right-[-55px] block w-[45px] h-[2px] bg-[#FEA116] ml-2"></span>
           </h4>
                        <h5 className="font-bold text-h5">Monday - Saturday</h5>
                        <p className="text-h5">09AM - 09PM</p>
                        <h5 className="font-bold text-h5 mt-5">Sunday</h5>
                        <p className="text-h5">10AM - 08PM</p>
           </div>
           <div>
           <h4 className="font-paci text-[#FEA116]  font-[400] text-left text-h4 mb-4 relative inline-block">Newsletter
           <span className=" absolute top-1/2 right-[-55px] block w-[45px] h-[2px] bg-[#FEA116] ml-2"></span>
           </h4>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="relative mx-auto w-full max-w-md mt-5">
            <input  className="form-control border border-[#FEA116] w-full py-4 pl-4 pr-12 rounded"  type="text"  placeholder="Your email"  />
    <button   type="button"   className="bg-[#FEA116] text-white py-2 px-4 absolute top-0 right-0 mt-2 mr-2 rounded"  > Sign Up  </button>
</div>
           </div>
            </div>
           </div>
            <div className="container ">
               <div className="py-6 text-base border-t border-t-[rgba(256,256,256,0.1)]">
               <div className="flex flex-col md:flex-row justify-between items-center p-4  text-white">
    <div className="text-center md:text-left mb-3 md:mb-0">
        &copy; <a className="border-b border-white" href="#">NZDine</a>, All Rights Reserved.
    </div>
    <div className="footer-menu mt-3 md:mt-0">
        <a href="#" className="mr-4 pr-4 border-r border-r-[rgba(255, 255, 255, 0.1)] last:border-r-0">Home</a>
        <a href="#" className="mr-4 pr-4 border-r border-r-[rgba(255, 255, 255, 0.1)] last:border-r-0">Cookies</a>
        <a href="#" className="mr-4 pr-4 border-r border-r-[rgba(255, 255, 255, 0.1)] last:border-r-0">Help</a>
        <a href="#" className="last:border-r-0">FAQs</a>
    </div>
</div>
               </div>
            </div>
          </div>
        </div>
    )
}