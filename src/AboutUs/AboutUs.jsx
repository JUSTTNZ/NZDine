import { useEffect, useState, useRef } from "react";
import { Navbar } from "../component/navbar"
import HeroBg from '../img/bg-hero.jpg';
import aboutImg1  from '../img/about-1.jpg'
import aboutImg2  from '../img/about-2.jpg'
import aboutImg3  from '../img/about-3.jpg'
import aboutImg4  from '../img/about-4.jpg'

const AboutUs = () => {

    const [experienceYears, setExperienceYears] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        }
    }, [])

    useEffect(() => {
        if(isInView) {
            const interval = setInterval(() => {
                setExperienceYears((prevExperienceYears) => {
                    if(prevExperienceYears < 15) {
                        return prevExperienceYears + 1;
                    } else {
                        clearInterval(interval)
                        return prevExperienceYears;
                    }
                })
            }, 100)
            return () => clearInterval(interval)
        }
    },[isInView]);
  return (
    <div className="w-full">
                  <div 
    className="h-[390px] relative bg-cover bg-center bg-no-repeat text-white" 
    style={{ 
        backgroundImage: `linear-gradient(rgba(15, 23, 43, 0.9), rgba(15, 23, 43, 0.9)), url(${HeroBg})` 
    }}
>
            <Navbar />
            <div className=" py-5  mb-5">
                <div className="text-center my-5 pt-5 pb-4">
                    <h1 className="text-h1 text-bold text-white mb-3 ">About Us</h1>
                    <nav aria-label="breadcrumb">
    <ol className="flex justify-center space-x-4 text-sm text-gray-600 uppercase">
        <li className="breadcrumb-item">
            <a href="#" className="text-[#FEA116]">Home </a>/
        </li>
        <li className="breadcrumb-item">
            <a href="#" className="text-[#FEA116]">Pages </a>/
        </li>
        <li className="breadcrumb-item text-white font-bold" aria-current="page">
        About Us
        </li>
    </ol>
</nav>
                </div>
            </div>
        </div>
      <Navbar/>
        <div className="flex">
            <div className="max-w-xl h-screen mx-16">
                <div className="grid grid-cols-2 relative gap-4 my-24 ml-12">
                    <div className="w-full">
                        <img src={aboutImg1} alt="" />
                    </div>
                    <div className="w-3/4 translate-x-[-0.1%] translate-y-[25%] ">
                        <img src={aboutImg2} alt="" />
                    </div>
                    <div className="w-3/4 translate-x-[33%] translate-y-[0]">
                        <img src={aboutImg3} alt="" />
                    </div>
                    <div className="w-full">
                        <img src={aboutImg4} alt="" />
                    </div>
                </div>
            </div>
            <div className="mt-[150px]">
                <div className=" flex items-center space-x-6 mb-4">
                <p className="text-xl font-semibold">About us</p>
                <hr className="flex border-t-2 w-12 mt-2 border-gray-900"/>
                </div>
                <h2 className="text-4xl font-bold mb-4">Welcome to NZDine</h2>
                <p className="text-lg text-gray-500">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam <br /> amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
                  <br /> <br />
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.Aliqu diam <br /> amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita <br /> duo justo magna dolore erat amet
                </p>

                <div className="flex space-x-16 mt-6">
                    <div className="flex ">
                        <div className="border-l-8 border-yellow-500 h-14 pl-4"></div>
                        <div className="flex space-x-8">
                            <p className="text-5xl text-yellow-500 font-bold">{experienceYears}</p>
                            <div>
                                <p className="text-lg font-light">Years of</p>
                                <p className="text-lg font-semibold mt-[-5px]">EXPERIENCE</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex ">
                        <div className="border-l-8 border-yellow-500 h-14 pl-4"></div>
                        <div className="flex space-x-8">
                            <p className="text-5xl text-yellow-500 font-bold">50</p>
                            <div>
                                <p className="text-lg font-light">Popular</p>
                                <p className="text-lg font-semibold mt-[-5px]">MASTER CHEFS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
