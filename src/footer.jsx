import { ArrowRight2, Call, Location, MessageSquare } from "iconsax-react"
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
export const Footer = () => {
    return(
        <div className="container mx-auto  mt-5 pt-5 bg-[#0F172B] text-[#F1F8FF]">
           <div className="conatiner py-5 p-[70px]">
           <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5">
           <div className="">
           <h4 className="font-paci text-[#FEA116] section-title font-[400] text-left text-h4 mb-4 relative inline-block">Company
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
           <h4 className="font-paci text-[#FEA116] section-title font-[400] text-left text-h4 mb-4 relative inline-block">Contact
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
           <h4 className="font-paci text-[#FEA116] section-title font-[400] text-left text-h4 mb-4 relative inline-block">Opening</h4>
                        <h5 className="text-light fw-normal">Monday - Saturday</h5>
                        <p>09AM - 09PM</p>
                        <h5 className="text-light fw-normal">Sunday</h5>
                        <p>10AM - 08PM</p>
           </div>
           <div>
           <h4 className="section-title text-start text-primary fw-normal mb-4">Newsletter</h4>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" >
                            <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
           </div>
            </div>
           </div>
            <div className="container p-[70px]">
               <div className="border-[#] border-2px">
               <div className="flex justify-between">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">
                            NZDine</a>, All Right Reserved. 
							
						
							Designed By <a className="border-bottom" href="#">
                            NZDine</a><br/><br/>
                            Distributed By <a className="border-bottom" href="#" target="_blank">
                            NZDine</a>
                        </div>
                        <div>
                        <div className="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                </div>
               </div>
            </div>
        </div>
    )
}