import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa"
import client1 from '../img/testimonial-1.jpg';
import client2 from '../img/testimonial-2.jpg';
import client3 from '../img/testimonial-3.jpg';
import client4 from '../img/testimonial-4.jpg';
const Clients = [
    { Id: 1, ClientsName: 'Princess', Img: client1, Profession: 'DevOps', Description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,sed stet lorem sit clita duo justo magna dolore erat amet' },
    { Id: 2, ClientsName: 'Great', Img: client2, Profession: 'Frontend Developer', Description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet' },
    { Id: 3, ClientsName: 'Vincent', Img: client3, Profession: 'Backend Developer', Description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,sed stet lorem sit clita duo justo magna dolore erat amet' },
    { Id: 4, ClientsName: 'Possible', Img: client4, Profession: 'Frontend Developer', Description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,sed stet lorem sit clita duo justo magna dolore erat amet' },
    { Id: 5, ClientsName: 'Collins', Img: client2, Profession: 'Software Developer', Description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,sed stet lorem sit clita duo justo magna dolore erat amet' },
    { Id: 6, ClientsName: 'Promise', Img: client4, Profession: 'Full Stack Developer', Description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. <br /> Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet' },
]
const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: "0", // Ensures no padding on the sides
        beforeChange: (_, next) => setCurrentSlide(next), 
        customPaging: (i) => (
            <div className={`dot ${i === currentSlide ? "active" : ""}`} />
        ),
        responsive: [
        {
            breakpoint: 1024, // Tablet and below
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "0",
            }
        },
        {
            breakpoint: 600, // Mobile devices
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "0",
            }
        }
    ]
      };
    
    const [currentSlide, setCurrentSlide] =  useState(0)
    const slideCount = Clients.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount)
        },3000)
        return () => clearInterval(interval);
    },[slideCount])

    const getSlideClasses = (index) => { 
        if(index === currentSlide) {
            return `active-slide bg-[#FEA116] text-white border rounded-lg  z-10 `;
        }else if (index === (currentSlide + 1) % slideCount || index === (currentSlide - 1 + slideCount) % slideCount) {
            return ' non-active-slide bg-white text-black  scale-95 shadow-md ';
        } else {
            return 'bg-white text-black  scale-95 shadow-md'
        }
    }
  return (
    <div className="mb-20">
        <div>
            <div className="text-center mt-24 ">
                <h5 className="font-paci text-[#FEA116]  font-[400] text-left text-h4 mb-4 relative inline-block">
                <span className="mr-1 absolute top-1/2 left-[-60px] block w-[45px] h-[2px] bg-[#FEA116] ml-2"></span>
                Testimonials
                <span className=" absolute top-1/2 right-[-55px] block w-[45px] h-[2px] bg-[#FEA116] ml-2"></span>
                </h5>
                <h1 className="mb-5 text-query text-[#0F172B] font-nun font-bold leading-custom">Our Clients Say!!!</h1>
            </div>
        </div>
        <div className="w-3/4 m-auto">
            <div className="pt-20 ">
                <Slider {...settings}>
                { Clients.map((client, index) => (
                    <div 
                    key={client.Id}
                    className={`flex-shrink-0 w-1/3 p-6 mb-8 border rounded rounded-lg ${getSlideClasses(index)}`}
                    >
                        <div>
                        <a href="">
                            <FaQuoteLeft
                                size={24}
                                className={`mb-4 ${
                                    currentSlide === index || 
                                    index === (currentSlide + 1) % slideCount &&
                                    index === (currentSlide - 1 + slideCount) % slideCount
                                        ? 'text-[#fff]'
                                        : 'text-[#FEA116]'
                                }`}
                            />
                        </a>
                        <p className="mb-6">
                            {client.Description}
                        </p>
                        </div>
                        <div className="flex items-center">
                            <img src={client.Img} 
                            alt={client.ClientsName} 
                            className="w-12 h-12 rounded-full mr-3" 
                            />
                            <div className="text-left text-paci">
                                <p className="font-bold text-lg">{client.ClientsName}</p>
                                <p className="font-sm text-sm">{client.Profession}</p>
                            </div>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
