import { FaQuoteLeft } from "react-icons/fa"
import client1 from '../img/testimonial-1.jpg';
import client2 from '../img/testimonial-2.jpg';
import client3 from '../img/testimonial-3.jpg';
import client4 from '../img/testimonial-4.jpg';
import { useEffect, useState } from "react";
const Clients = [
    { Id: 1, ClientsName: 'Princess', Img: client1, Profession: 'DevOps', Description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. <br /> Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, <br /> sed stet lorem sit clita duo justo magna dolore erat amet' },
    { Id: 2, ClientsName: 'Great', Img: client2, Profession: 'Frontend Developer', Description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. <br /> Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, <br /> sed stet lorem sit clita duo justo magna dolore erat amet' },
    { Id: 3, ClientsName: 'Vincent', Img: client3, Profession: 'Backend Developer', Description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. <br /> Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, <br /> sed stet lorem sit clita duo justo magna dolore erat amet' },
    { Id: 4, ClientsName: 'Possible', Img: client4, Profession: 'Frontend Developer', Description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. <br /> Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, <br /> sed stet lorem sit clita duo justo magna dolore erat amet' },
    { Id: 5, ClientsName: 'Collins', Img: client2, Profession: 'Software Developer', Description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. <br /> Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, <br /> sed stet lorem sit clita duo justo magna dolore erat amet' },
    { Id: 6, ClientsName: 'Promise', Img: client4, Profession: 'Full Stack Developer', Description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. <br /> Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, <br /> sed stet lorem sit clita duo justo magna dolore erat amet' },
]
const Testimonial = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideCount = Clients.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount)
        },3000)
        return () => clearInterval(interval);
    },[slideCount])

    const getSlideClasses = (index) => { 
        if(index === currentSlide) {
            return 'bg-[#FEA116] text-white border rounded rounded-lg scale-100 z-10 shadow-lg transform translate-x-0';
        }else if (index === (currentSlide + 1) % slideCount) {
            return 'bg-white text-black  scale-95 shadow-md opacity-80 transform translate-x-full';
        }else if (index === (currentSlide -1 + slideCount) % slideCount){
            return 'bg-white text-black  scale-95 shadow-md opacity-80 transform -translate-x-full';
        } else {
            return 'bg-white text-black  scale-95 shadow-md opacity-80 transform translate-x-full'
        }
    }
  return (
    <div className="mb-10">
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
        <div className="flex flex-col items-center mt-8 relative">
            <div className="flex space-x-4 px-24 items-center overflow-hidden w-full mr-4">
                { Clients.map((client, index) => (
                    <div 
                    key={client.Id}
                    className={`flex-shrink-0 w-1/3 p-6 border rounded rounded-lg transition-all duration-500 ease-in-out transform ${getSlideClasses(index)}`}
                    >
                        <div>
                        <a href="">
                            <FaQuoteLeft size={24} className="mb-4"/>
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
            </div>
        </div>
    </div>
  )
}

export default Testimonial
