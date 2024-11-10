import { FaQuoteLeft } from "react-icons/fa"
import client1 from '../img/testimonial-1.jpg';
import client2 from '../img/testimonial-2.jpg';
import client3 from '../img/testimonial-3.jpg';
import client4 from '../img/testimonial-4.jpg';
const Clients = [
    { Id: 1, ClientsName: 'Princess', Img: client1, Description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. <br /> Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, <br /> sed stet lorem sit clita duo justo magna dolore erat amet' },
    { Id: 2, ClientsName: 'Great', Img: client2, Description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. <br /> Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, <br /> sed stet lorem sit clita duo justo magna dolore erat amet' },
    { Id: 3, ClientsName: 'Vincent', Img: client3, Description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. <br /> Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, <br /> sed stet lorem sit clita duo justo magna dolore erat amet' },
    { Id: 4, ClientsName: 'Possible', Img: client4, Description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. <br /> Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, <br /> sed stet lorem sit clita duo justo magna dolore erat amet' },
    { Id: 5, ClientsName: 'Collins', Img: client2, Description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. <br /> Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, <br /> sed stet lorem sit clita duo justo magna dolore erat amet' },
    { Id: 6, ClientsName: 'Promise', Img: client4, Description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. <br /> Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, <br /> sed stet lorem sit clita duo justo magna dolore erat amet' },
]
const Testimonial = () => {
  return (
    <div>
        <div>
            <div className="text-center ">
                <h5 className="font-paci text-[#FEA116]  font-[400] text-left text-h4 mb-4 relative inline-block">
                <span className="mr-1 absolute top-1/2 left-[-60px] block w-[45px] h-[2px] bg-[#FEA116] ml-2"></span>
                Testimonials
                <span className=" absolute top-1/2 right-[-55px] block w-[45px] h-[2px] bg-[#FEA116] ml-2"></span>
                </h5>
                <h1 className="mb-5 text-query text-[#0F172B] font-nun font-bold leading-custom">Our Clients Say!!!</h1>
            </div>
        </div>
        <div>
            { Clients.map((client) => (
                <li 
                key={client.Id}>
                    <div>
                    <a href="">
                        <FaQuoteLeft/>
                    </a>
                    <p>
                        {client.Description}
                    </p>
                    </div>
                </li>
            ))}

        </div>
    </div>
  )
}

export default Testimonial
